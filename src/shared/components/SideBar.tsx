import { useLocation, Link } from "react-router-dom"
import { LayoutDashboard, Package, Tag, ShoppingCart, Truck, Users, BarChart3 } from "lucide-react"

export function SideBar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="w-64 bg-zinc-950 border-r border-zinc-800 h-full flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-bold">StockControl</h2>
      </div>
      <nav className="flex-1">
        <div className="px-3">
          <div className="space-y-1">
            <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" active={pathname === "/"} />
            <NavItem
              href="/productos"
              icon={<Package size={20} />}
              label="Productos"
              active={pathname === "/productos"}
            />
            <NavItem
              href="/categorias"
              icon={<Tag size={20} />}
              label="Categorías"
              active={pathname === "/categorias"}
            />
            <NavItem href="/ventas" icon={<ShoppingCart size={20} />} label="Ventas" active={pathname === "/ventas"} />
            <NavItem
              href="/proveedores"
              icon={<Truck size={20} />}
              label="Proveedores"
              active={pathname === "/proveedores"}
            />
            <NavItem href="/clientes" icon={<Users size={20} />} label="Clientes" active={pathname === "/clientes"} />
            <NavItem
              href="/reportes"
              icon={<BarChart3 size={20} />}
              label="Reportes"
              active={pathname === "/reportes"}
            />
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <Users size={14} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-zinc-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link
      to={href}
      className={`flex items-center px-3 py-2 text-sm rounded-md ${
        active ? "bg-zinc-900 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  )
}
