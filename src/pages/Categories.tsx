import { SideBar } from "../components/SideBar"
import { Plus } from "lucide-react"

export default function Categories() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Categorías</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Plus size={16} />
              Añadir Categoría
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Lista de Categorías</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">ID</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Nombre</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Productos</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Descripción</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id} className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50">
                        <td className="p-4 align-middle">{category.id}</td>
                        <td className="p-4 align-middle">{category.name}</td>
                        <td className="p-4 align-middle">{category.products}</td>
                        <td className="p-4 align-middle">{category.description}</td>
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

const categories = [
  {
    id: "C001",
    name: "Electronics",
    products: 120,
    description: "Dispositivos electrónicos y accesorios",
  },
  {
    id: "C002",
    name: "Clothing",
    products: 85,
    description: "Ropa y accesorios de moda",
  },
  {
    id: "C003",
    name: "Home & Kitchen",
    products: 65,
    description: "Artículos para el hogar y cocina",
  },
  {
    id: "C004",
    name: "Books",
    products: 30,
    description: "Libros y material de lectura",
  },
]
