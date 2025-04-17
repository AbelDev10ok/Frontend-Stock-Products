import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Sales from "./pages/Sales"
import Provider from "./pages/Provider"
import Clients from "./pages/Clients"
import Reportes from "./pages/Reportes"
import ProtectedRoute from "./components/ProtectedRoute"
import LoginForm from "./components/Login"
import useStore from "./store/useStore"
import { useEffect } from "react"


function App() {
  const checkAuth = useStore((state) => state.checkAuth)

  useEffect(() => {
    checkAuth()// verufico la autenticacion al cargar la app
  }
  , [checkAuth])

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
