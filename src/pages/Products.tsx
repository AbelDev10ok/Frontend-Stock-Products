import { SideBar } from "../components/SideBar"
import { Plus } from "lucide-react"

export default function Products() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Productos</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Plus size={16} />
              Añadir Producto
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Lista de Productos</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">ID</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Nombre</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Categoría</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Precio</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Stock</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Estado</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50">
                        <td className="p-4 align-middle">{product.id}</td>
                        <td className="p-4 align-middle">{product.name}</td>
                        <td className="p-4 align-middle">{product.category}</td>
                        <td className="p-4 align-middle">${product.price}</td>
                        <td className="p-4 align-middle">{product.stock}</td>
                        <td className="p-4 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                              product.status === "En stock"
                                ? "bg-emerald-500/20 text-emerald-500 border-transparent"
                                : product.status === "Bajo stock"
                                  ? "bg-amber-500/20 text-amber-500 border-transparent"
                                  : "bg-red-500/20 text-red-500 border-transparent"
                            }`}
                          >
                            {product.status}
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

const products = [
  {
    id: "P001",
    name: "Laptop HP Pavilion",
    category: "Electronics",
    price: 899.99,
    stock: 45,
    status: "En stock",
  },
  {
    id: "P002",
    name: 'Monitor Samsung 27"',
    category: "Electronics",
    price: 249.99,
    stock: 32,
    status: "En stock",
  },
  {
    id: "P003",
    name: "Teclado Mecánico RGB",
    category: "Electronics",
    price: 79.99,
    stock: 12,
    status: "Bajo stock",
  },
  {
    id: "P004",
    name: "Mouse Inalámbrico",
    category: "Electronics",
    price: 29.99,
    stock: 8,
    status: "Bajo stock",
  },
  {
    id: "P005",
    name: "Auriculares Bluetooth",
    category: "Electronics",
    price: 59.99,
    stock: 0,
    status: "Sin stock",
  },
]
