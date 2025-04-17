import {create} from 'zustand';

interface Token {
    token:string | null
    isAuthenticated:boolean
    isLoading:boolean
    setToken:(token:string) => void
    clearToken: () => void
    checkAuth: () => void
}

const useStore = create<Token>((set) => ({
    token:localStorage.getItem("jwt_token") || null,
    isAuthenticated: !!localStorage.getItem("jwt_token"),
    isLoading:false,

    setToken:(token:string)=>{
        localStorage.setItem("jwt_token",token);
        set({ token, isAuthenticated: true, isLoading: false })
      },
    clearToken:()=>{
        localStorage.removeItem("jwt_token");
        set({ token: null, isAuthenticated: false, isLoading: false })
      },
    checkAuth: () => {
        set({isLoading:true})
        const token = localStorage.getItem("jwt_token")
        if (token) {
            try {
                // Decodifica el token y verifica su expiración
                const payload = JSON.parse(atob(token.split(".")[1]))
                const isTokenValid = Date.now() < payload.exp * 1000 // Verifica si no ha expirado
                if (isTokenValid) {
                  set({ token, isAuthenticated: true, isLoading: false })
                } else {
                  set({ token: null, isAuthenticated: false, isLoading: false })
                  localStorage.removeItem("jwt_token")
                }
              } catch (error) {
                console.error("Invalid token:", error)
                set({ token: null, isAuthenticated: false, isLoading: false })
                localStorage.removeItem("jwt_token")
              }
            } else {
              set({ token: null, isAuthenticated: false, isLoading: false })
            }
    }
}));

export default useStore;