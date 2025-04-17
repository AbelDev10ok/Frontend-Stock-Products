import { SideBar } from "../components/SideBar"
import { Plus } from "lucide-react"

export default function Provider() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Proveedores</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Plus size={16} />
              Añadir Proveedor
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Lista de Proveedores</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">ID</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Nombre</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Contacto</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Email</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Teléfono</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Estado</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50">
                        <td className="p-4 align-middle">{supplier.id}</td>
                        <td className="p-4 align-middle">{supplier.name}</td>
                        <td className="p-4 align-middle">{supplier.contact}</td>
                        <td className="p-4 align-middle">{supplier.email}</td>
                        <td className="p-4 align-middle">{supplier.phone}</td>
                        <td className="p-4 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                              supplier.status === "Activo"
                                ? "bg-emerald-500/20 text-emerald-500 border-transparent"
                                : "bg-red-500/20 text-red-500 border-transparent"
                            }`}
                          >
                            {supplier.status}
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

const suppliers = [
  {
    id: "S001",
    name: "TechSupplies Inc.",
    contact: "John Smith",
    email: "john@techsupplies.com",
    phone: "+1 555-123-4567",
    status: "Activo",
  },
  {
    id: "S002",
    name: "FashionWholesale Co.",
    contact: "Emma Johnson",
    email: "emma@fashionwholesale.com",
    phone: "+1 555-987-6543",
    status: "Activo",
  },
  {
    id: "S003",
    name: "HomeGoods Distributors",
    contact: "Michael Brown",
    email: "michael@homegoods.com",
    phone: "+1 555-456-7890",
    status: "Inactivo",
  },
  {
    id: "S004",
    name: "BookWorld Publishers",
    contact: "Sarah Wilson",
    email: "sarah@bookworld.com",
    phone: "+1 555-789-0123",
    status: "Activo",
  },
]
