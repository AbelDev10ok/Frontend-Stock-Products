import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Lock, Mail } from 'lucide-react'
import { authService} from "../services/api"

import useStore from "../store/useStore"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const { login } = authService

  const {isAuthenticated} = useStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      navigate("/dashboard")
      console.log(isAuthenticated)
    } catch (err: any) {
      setError(err.message || "Credenciales inválidas. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Iniciar sesión</h2>

        {error && (
          <div className="mb-4 rounded-md border border-red-80 0 bg-zinc-900 p-4">
            <div className="text-sm text-red-400">{error}</div>
          </div>
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

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-[#9333EA] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-75"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
