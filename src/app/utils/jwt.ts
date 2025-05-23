interface DecodedToken {
    [key: string]: any
    exp?: number
  }
  
  export function jwtDecode(token: string): DecodedToken {
    try {
      const base64Url = token.split(".")[1]
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      )
      return JSON.parse(jsonPayload)
    } catch (error) {
      console.error("Error decoding JWT:", error)
      throw new Error("Invalid token format")
    }
  }
  
  export function getAuthHeader(): Record<string, string> {
    const token = localStorage.getItem("jwt_token")
    return token ? { Authorization: `Bearer ${token}` } : {}
  }
  