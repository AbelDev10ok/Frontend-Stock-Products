import { AlertCircle, CheckCircle, X } from "lucide-react";

export default function Alert({ type, message, setNotification }: { type: "success" | "error"; message: string; setNotification: (value: null) => void }) {
  return (
    <div
    className={`mb-6 rounded-lg p-4 flex items-start justify-between transition-all duration-300 ease-in-out ${
      type === "success"
        ? "bg-green-900/30 border border-green-700"
        : "bg-red-900/30 border border-red-700"
    }`}
    role="alert"
    aria-live="assertive"
  >
    <div className="flex items-center">
      {type === "success" ? (
        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
      ) : (
        <AlertCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
      )}
      <p className={`text-sm ${type === "success" ? "text-green-300" : "text-red-300"}`}>
        {message}
      </p>
    </div>
    <button
      onClick={() => setNotification(null)}
      className="ml-4 inline-flex flex-shrink-0 h-5 w-5 items-center justify-center rounded-md text-zinc-400 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      aria-label="Cerrar notificación"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
  )
}