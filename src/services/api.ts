import useStore from "../store/useStore"

// Base API URL - replace with your actual API endpoint
const API_URL = import.meta.env.VITE_API_URL || "https://localhost:8080/api/v1"

// Get the token from localStorage
const getToken = () => localStorage.getItem("jwt_token")



// Generic fetch function with authentication
export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = getToken()

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

// Authentication service
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
      const error = await response.json()
      throw new Error(error.message || "Failed to login")
    }

    
    const data = await response.json()
    console.log(data)
    const setToken = useStore.getState().setToken
    setToken(data.token) // Store the token in Zustand state
    // Store the token in localStorage for persistence
    localStorage.setItem("jwt_token", data.token)
    return data
  },

  logout() {
    localStorage.removeItem("jwt_token")
    window.location.href = "/login"
  },

  isAuthenticated() {
    const token = getToken()
    if (!token) return false

    // Basic validation - in production you might want to verify the token
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      const expiry = payload.exp * 1000 // Convert to milliseconds
      return Date.now() < expiry
    } catch (e) {
      return false
    }
  },
}
