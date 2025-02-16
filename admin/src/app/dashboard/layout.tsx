import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
    <SidebarProvider >
      <AppSidebar />
      <main>
        <SidebarTrigger className="md:hidden"/>
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}