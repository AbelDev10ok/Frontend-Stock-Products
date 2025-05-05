import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Dashboard from "./features/Dashboard/components/Dashboard"
import Products from "./features/Products/components/Products"
import Categories from "./features/Categories/components/Categories"
import Sales from "./features/Sales/components/Sales"
import Provider from "./features/Providers/components/Provider"
import Clients from "./features/Clients/components/Clients"
import Reportes from "./features/Report/components/Reportes"
import ProtectedRoute from "./shared/components/ProtectedRoute"
import LoginForm from "./features/Auth/components/Login"
import useStore from "./app/store/useStore"
import { useEffect } from "react"


function App() {
  const checkAuth = useStore((state) => state.checkAuth);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const isLoading = useStore((state) => state.isLoading);

  // verifica si el token es valido , cuando se carga la app 

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  if (isLoading) {
    return <div>Cargando...</div>; // Muestra un indicador de carga mientras se verifica la autenticación
  }
  
  if (!isAuthenticated && window.location.pathname !== "/login") {
    navigate("/login");
  }
  
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/ventas" element={<Sales/>} />
        <Route path="/proveedores" element={<Provider />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/reportes" element={<Reportes />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
