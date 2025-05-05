import { useEffect, useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Lock, LogIn, Mail, UserPlus } from 'lucide-react'
import { authService} from "../services/api"
import Alert from "../components/Alert"

export default function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [notification, setNotification] = useState<{
    type: "success" | "error"
    message: string
    visible: boolean
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { login, register } = authService


  // Efecto para ocultar la notificación después de un tiempo
  useEffect(() => {
    if (notification?.visible) {
      const timer = setTimeout(() => {
        setNotification((prev) => (prev ? { ...prev, visible: false } : null))
      }, 5000) // 5 segundos

      return () => clearTimeout(timer)
    }
  }, [notification])

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({
      type,
      message,
      visible: true,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validación de contraseñas en modo registro
    if (!isLoginMode && password !== confirmPassword) {
      showNotification("error", "Las contraseñas no coinciden")
      return
    }

    setIsLoading(true)

    try {
      if (isLoginMode) {
        // Proceso de inicio de sesión
        await login(email, password)
        navigate("/dashboard")
      } else {
        // Proceso de registro
        await register(email, password)
        // Después de registrarse exitosamente, cambiamos al modo de inicio de sesión
        setIsLoginMode(true)
        setPassword("")
        setConfirmPassword("")
        // Mostrar mensaje de éxito
        showNotification("success", "¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.")
      }
    } catch (err: any) {
      console.error("Error capturado en handleSubmit:", err)
      showNotification(
        "error",
        err.message || (isLoginMode ? "Email o contraseña incorrectos" : "Error al crear la cuenta"),
      )
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode)
    setNotification(null)
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">{isLoginMode ? "Iniciar sesión" : "Crear cuenta"}</h2>

        {notification && notification.visible && (
          <Alert type={notification.type} message={notification.message}setNotification={setNotification}/>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
              Correo electrónico
            </label>
            <div className="mt-1 flex items-center rounded-md border border-zinc-800 bg-zinc-950 focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600">
              <Mail className="ml-3 h-5 w-5 text-zinc-500" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-transparent px-3 py-2 text-white placeholder-zinc-500 focus:outline-none"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-400">
              Contraseña
            </label>
            <div className="mt-1 flex items-center rounded-md border border-zinc-800 bg-zinc-950 focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600">
              <Lock className="ml-3 h-5 w-5 text-zinc-500" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-transparent px-3 py-2 text-white placeholder-zinc-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {!isLoginMode && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-400">
                Confirmar contraseña
              </label>
              <div className="mt-1 flex items-center rounded-md border border-zinc-800 bg-zinc-950 focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600">
                <Lock className="ml-3 h-5 w-5 text-zinc-500" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-transparent px-3 py-2 text-white placeholder-zinc-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-md bg-[#9333EA] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-75"
            >
              {isLoading ? (
                isLoginMode ? (
                  "Iniciando sesión..."
                ) : (
                  "Creando cuenta..."
                )
              ) : (
                <>
                  {isLoginMode ? (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Iniciar sesión
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Crear cuenta
                    </>
                  )}
                </>
              )}
            </button>
          </div>

          <div className="text-center text-sm text-zinc-400">
            {isLoginMode ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
            <button type="button" onClick={toggleMode} className="text-purple-400 hover:text-purple-300">
              {isLoginMode ? "Crear cuenta" : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
