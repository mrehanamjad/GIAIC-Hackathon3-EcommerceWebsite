import Link from "next/link"
import { Box, ShoppingCart, Users, BarChart, Settings, Truck } from "lucide-react"

const quickAccessItems = [
  { title: "Inventory", icon: Box, link: "/inventory" },
  { title: "Orders", icon: ShoppingCart, link: "/orders" },
  { title: "Customers", icon: Users, link: "/customers" },
  { title: "Analytics", icon: BarChart, link: "/analytics" },
  { title: "Settings", icon: Settings, link: "/settings" },
  { title: "Shipping", icon: Truck, link: "/shipping" },
]

export default function QuickAccessGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickAccessItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <item.icon className="h-8 w-8 text-brown-600" />
                <h3 className="text-xl font-semibold text-brown-700">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

