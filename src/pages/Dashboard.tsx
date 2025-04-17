import { User, Package, ShoppingCart } from "lucide-react"
import { SideBar } from "../components/SideBar"
import { MonthlyChart } from "../components/MonthlyChart"
import { CategoryChart } from "../components/CategoryChart"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Tarjeta 1: Total Productos */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-zinc-400 mb-2">Total Productos</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">245</div>
                  <div className="text-xs text-emerald-500 flex items-center mt-1">
                    <span className="mr-1">↑</span> 12% desde el mes pasado
                  </div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Package className="h-5 w-5 text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Ventas Mensuales */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-zinc-400 mb-2">Ventas Mensuales</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">$12,450</div>
                  <div className="text-xs text-emerald-500 flex items-center mt-1">
                    <span className="mr-1">↑</span> 8% desde el mes pasado
                  </div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-full">
                  <ShoppingCart className="h-5 w-5 text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Productos Bajos en Stock */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-zinc-400 mb-2">Productos Bajos en Stock</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-xs text-amber-500 flex items-center mt-1">Atención requerida</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Package className="h-5 w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Clientes Activos */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-zinc-400 mb-2">Clientes Activos</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">87</div>
                  <div className="text-xs text-emerald-500 flex items-center mt-1">
                    <span className="mr-1">↑</span> 5% desde el mes pasado
                  </div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-full">
                  <User className="h-5 w-5 text-zinc-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico de Ventas Mensuales */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Ventas Mensuales</h3>
                <p className="text-xs text-zinc-400">Tendencia de ventas de los últimos 7 meses</p>
              </div>
              <div className="p-6 pt-0">
                <MonthlyChart />
              </div>
            </div>

            {/* Gráfico de Distribución por Categoría */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Distribución por Categoría</h3>
                <p className="text-xs text-zinc-400">Productos por categoría</p>
              </div>
              <div className="p-6 pt-0">
                <CategoryChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
