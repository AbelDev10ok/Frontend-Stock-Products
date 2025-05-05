import { SideBar } from "../../../shared/components/SideBar"
import { Plus } from "lucide-react"

export default function Clientes() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Clientes</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Plus size={16} />
              Añadir Cliente
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Lista de Clientes</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">ID</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Nombre</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Email</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Teléfono</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Compras</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Estado</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50">
                        <td className="p-4 align-middle">{customer.id}</td>
                        <td className="p-4 align-middle">{customer.name}</td>
                        <td className="p-4 align-middle">{customer.email}</td>
                        <td className="p-4 align-middle">{customer.phone}</td>
                        <td className="p-4 align-middle">${customer.purchases.toFixed(2)}</td>
                        <td className="p-4 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                              customer.status === "Activo"
                                ? "bg-emerald-500/20 text-emerald-500 border-transparent"
                                : "bg-red-500/20 text-red-500 border-transparent"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <button className="border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white h-9 rounded-md px-3 text-sm">
                              Editar
                            </button>
                            <button className="border border-red-500 text-red-500 hover:bg-red-500/10 h-9 rounded-md px-3 text-sm">
                              Eliminar
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

const customers = [
  {
    id: "C001",
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+34 612 345 678",
    purchases: 1249.99,
    status: "Activo",
  },
  {
    id: "C002",
    name: "María García",
    email: "maria@example.com",
    phone: "+34 623 456 789",
    purchases: 3450.5,
    status: "Activo",
  },
  {
    id: "C003",
    name: "Carlos López",
    email: "carlos@example.com",
    phone: "+34 634 567 890",
    purchases: 789.99,
    status: "Inactivo",
  },
  {
    id: "C004",
    name: "Ana Martínez",
    email: "ana@example.com",
    phone: "+34 645 678 901",
    purchases: 2129.99,
    status: "Activo",
  },
  {
    id: "C005",
    name: "Roberto Sánchez",
    email: "roberto@example.com",
    phone: "+34 656 789 012",
    purchases: 459.99,
    status: "Activo",
  },
]
