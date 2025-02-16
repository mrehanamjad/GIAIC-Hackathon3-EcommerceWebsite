
import QuickAccessGrid from "@/components/QuickAccessGrid"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#F5E6D3] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">Welcome to Royal Furniture Admin</h1>
        <p className="text-xl text-brown-600 mb-8">Manage your furniture empire with ease and elegance</p>
        <Button className="px-9 py-6 rounded-3xl text-xl">Lign In</Button>
      </div>
      <div>
      </div>
    </section>
        <QuickAccessGrid />
    </div>
  )
}

