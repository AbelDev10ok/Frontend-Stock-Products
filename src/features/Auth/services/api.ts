import useStore from "../../../app/store/useStore"
import { ApiResponse, AuthData } from "../../../shared/types/types"

const API_URL = import.meta.env.VITE_API_URL || "https://localhost:8080/api/v1"


// Generic fetch function with authentication
export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = useStore.getState().token; // Obtén el token desde Zustand

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  // Handle unauthorized responses (expired or invalid token)
  if (response.status === 401) {
    localStorage.removeItem("jwt_token")
    window.location.href = "/login"
    throw new Error("Session expired. Please login again.")
  }

  return response
}

export const authService = {
  async login(email: string, password: string) {
    const response = await fetch('http://localhost:8080/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorResponse:ApiResponse<string> = await response.json(); 
      console.error("Error en login:", errorResponse); 
      console.log("Error en login:", errorResponse.data);
      throw new Error(errorResponse.data   || "Error desconocido" );
    }

    const responseJson:AuthData = await response.json();
    console.log(responseJson);
    
    const setToken = useStore.getState().setToken;
    setToken(responseJson.token);
    localStorage.setItem("jwt_token", responseJson.token);
    return responseJson;
  },

  register: async (email: string, password: string) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/register", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      try {
        // Intenta analizar la respuesta como JSON
        const errorResponse:ApiResponse<string>  = await response.json();
        console.error("Error en registro:", errorResponse); 
        console.log("Error en registro:", errorResponse.data);
        throw new Error(errorResponse.data   || "Error desconocido" );
      } catch (e) {
        // Si no es un JSON válido, maneja el error como texto plano
        const errorText = await response.text();
        console.error("Error en el registro (texto):", errorText);
        throw new Error(errorText || "Error desconocido");
      }
    }
  
      // Intenta analizar la respuesta como JSON
      const successResponse: ApiResponse<string>  = await response.json();
      console.log("Registro exitoso:", successResponse);
      return successResponse || "Registro exitoso";
   
  },

  

  logout() {
    localStorage.removeItem("jwt_token")
    window.location.href = "/login"
  },

  isAuthenticated() {
    const token = useStore.getState().token;
    if (!token) return false

    // Basic validation - in production you might want to verify the token
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      console.log(payload)
      const expiry = payload.exp * 1000 // Convert to milliseconds
      return Date.now() < expiry
    } catch (e) {
      return false
    }
  },
}
