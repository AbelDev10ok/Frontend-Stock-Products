interface Token {
    token:string | null
    isAuthenticated:boolean
    isLoading:boolean
    setToken:(token:string) => void
    clearToken: () => void
    checkAuth: () => void
}

interface ApiResponse<T = any> {
    message: string;
    data: T;
  }
  
  interface AuthData {
    id: string;
    token: string;
    email: string;
}

export type {Token, ApiResponse, AuthData}

