import { SideBar } from "../../../shared/components/SideBar"
import { Plus } from "lucide-react"

export default function Sales() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Ventas</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Plus size={16} />
              Nueva Venta
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Historial de Ventas</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">ID</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Cliente</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Fecha</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Total</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Estado</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale) => (
                      <tr key={sale.id} className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50">
                        <td className="p-4 align-middle">{sale.id}</td>
                        <td className="p-4 align-middle">{sale.customer}</td>
                        <td className="p-4 align-middle">{sale.date}</td>
                        <td className="p-4 align-middle">${sale.total.toFixed(2)}</td>
                        <td className="p-4 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                              sale.status === "Completada"
                                ? "bg-emerald-500/20 text-emerald-500 border-transparent"
                                : sale.status === "Pendiente"
                                  ? "bg-amber-500/20 text-amber-500 border-transparent"
                                  : "bg-red-500/20 text-red-500 border-transparent"
                            }`}
                          >
                            {sale.status}
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <button className="border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white h-9 rounded-md px-3 text-sm">
                              Ver
                            </button>
                            <button className="border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white h-9 rounded-md px-3 text-sm">
                              Imprimir
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const sales = [
  {
    id: "V001",
    customer: "Juan Pérez",
    date: "09/04/2025",
    total: 1249.99,
    status: "Completada",
  },
  {
    id: "V002",
    customer: "María García",
    date: "08/04/2025",
    total: 349.5,
    status: "Completada",
  },
  {
    id: "V003",
    customer: "Carlos López",
    date: "07/04/2025",
    total: 789.99,
    status: "Pendiente",
  },
  {
    id: "V004",
    customer: "Ana Martínez",
    date: "06/04/2025",
    total: 129.99,
    status: "Cancelada",
  },
  {
    id: "V005",
    customer: "Roberto Sánchez",
    date: "05/04/2025",
    total: 459.99,
    status: "Completada",
  },
]
