import { Navigate, Outlet, useLocation } from "react-router-dom"
import useStore from "../store/useStore"
interface ProtectedRouteProps {
  redirectPath?: string
}

export default function ProtectedRoute({ redirectPath = "/login" }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useStore()
  const location = useLocation()

  // // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"></div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />
  }

  // Render child routes if authenticated
  return <Outlet />
}
