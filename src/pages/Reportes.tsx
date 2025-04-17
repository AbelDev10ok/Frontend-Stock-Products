"use client"

import { useState } from "react"
import { SideBar } from "../components/SideBar"
import { MonthlyChart } from "../components/MonthlyChart"
import { CategoryChart } from "../components/CategoryChart"

export default function Reportes() {
  const [activeTab, setActiveTab] = useState("ventas")

  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Reportes</h1>

          <div className="w-full">
            <div className="bg-zinc-900 text-zinc-400 mb-6 inline-flex h-10 items-center justify-center rounded-md p-1">
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === "ventas" ? "bg-background text-foreground shadow-sm" : ""
                }`}
                onClick={() => setActiveTab("ventas")}
              >
                Ventas
              </button>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === "productos" ? "bg-background text-foreground shadow-sm" : ""
                }`}
                onClick={() => setActiveTab("productos")}
              >
                Productos
              </button>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === "clientes" ? "bg-background text-foreground shadow-sm" : ""
                }`}
                onClick={() => setActiveTab("clientes")}
              >
                Clientes
              </button>
            </div>

            {activeTab === "ventas" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Ventas Mensuales</h3>
                    <p className="text-xs text-zinc-400">Tendencia de ventas de los últimos 7 meses</p>
                  </div>
                  <div className="p-6 pt-0">
                    <MonthlyChart />
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Ventas por Categoría</h3>
                    <p className="text-xs text-zinc-400">Distribución de ventas por categoría</p>
                  </div>
                  <div className="p-6 pt-0">
                    <CategoryChart />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "productos" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Productos Más Vendidos</h3>
                    <p className="text-xs text-zinc-400">Top productos por volumen de ventas</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="h-[250px] w-full flex items-center justify-center text-zinc-500">
                      Gráfico de productos más vendidos
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">
                      Distribución por Categoría
                    </h3>
                    <p className="text-xs text-zinc-400">Productos por categoría</p>
                  </div>
                  <div className="p-6 pt-0">
                    <CategoryChart />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "clientes" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Clientes Principales</h3>
                    <p className="text-xs text-zinc-400">Top clientes por volumen de compras</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="h-[250px] w-full flex items-center justify-center text-zinc-500">
                      Gráfico de clientes principales
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">Adquisición de Clientes</h3>
                    <p className="text-xs text-zinc-400">Nuevos clientes por mes</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="h-[250px] w-full flex items-center justify-center text-zinc-500">
                      Gráfico de adquisición de clientes
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
