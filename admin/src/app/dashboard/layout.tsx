import Sidebar from "@/components/Sidebar"

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex min-h-screen h-full">
      <header className="flex">
      <Sidebar />
      </header>
        <main className="flex-1">{children}</main>
        </div>
    </>
  )
}