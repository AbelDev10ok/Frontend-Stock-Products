"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function CategoryChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Electronics", "Clothing", "Home & Kitchen", "Books"],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: [
              "rgba(0, 123, 255, 0.8)",
              "rgba(0, 200, 150, 0.8)",
              "rgba(255, 180, 0, 0.8)",
              "rgba(255, 100, 50, 0.8)",
            ],
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "rgba(255, 255, 255, 0.7)",
              padding: 20,
              font: {
                size: 12,
              },
              generateLabels: (chart) => {
                const data = chart.data
                if (data.labels?.length && data.datasets.length) {
                  return data.labels.map((label, i) => {
                    const dataset = data.datasets[0]
                    const value = dataset.data[i]
                    return {
                      text: `${label} ${value}%`,
                      fillStyle: dataset.backgroundColor[i],
                      strokeStyle: dataset.borderColor,
                      lineWidth: dataset.borderWidth,
                      hidden: false,
                      index: i,
                    }
                  })
                }
                return []
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}%`,
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="h-[250px] w-full">
      <canvas ref={chartRef} />
    </div>
  )
}
