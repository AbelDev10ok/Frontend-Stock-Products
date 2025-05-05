import {create} from 'zustand';
import { Token } from '../../shared/types/types';


const useStore = create<Token>((set) => ({
  token: localStorage.getItem("jwt_token") || null,
  isAuthenticated: !!localStorage.getItem("jwt_token"),
  isLoading: false,

  setToken: (token: string) => {
    console.log("Guardando token en Zustand y localStorage:", token);
    localStorage.setItem("jwt_token", token);
    set({ token, isAuthenticated: true, isLoading: false });
  },
  clearToken: () => {
    console.log("Limpiando token en Zustand y localStorage");
    localStorage.removeItem("jwt_token");
    set({ token: null, isAuthenticated: false, isLoading: false });
  },
  checkAuth: () => {
    console.log("Ejecutando checkAuth...");
    set({ isLoading: true });
    const token = localStorage.getItem("jwt_token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica el token
        console.log("Payload del token:", payload);

        // Obtén el rol del usuario
        const roles = payload.authorities.map((auth: { authority: string }) => auth.authority);
        console.log("Roles del usuario:", roles);

        // Si necesitas un rol específico (por ejemplo, el primero):
        const primaryRole = roles[0];
        console.log("Rol principal del usuario:", primaryRole);

        const isTokenValid = Date.now() < payload.exp * 1000; // Verifica si aun el token no expira
        console.log("¿Token válido?:", isTokenValid);
        if (isTokenValid) {
          // Si el token es válido, se considera autenticado
          set({ token, isAuthenticated: true, isLoading: false });
        } else {
          // Si el token ha expirado, se considera no autenticado
          set({ token: null, isAuthenticated: false, isLoading: false });
          localStorage.removeItem("jwt_token");
        }
      } catch (error) {
        // Si hay un error al decodificar el token, se considera no autenticado
        console.error("Error al decodificar el token:", error);
        localStorage.removeItem("jwt_token");
        set({ token: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      // si no hay token, se considera no autenticado
      console.log("No hay token, autenticación fallida.");
      set({ token: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
export default useStore;