import { BaggageClaim,  CirclePlus, Home,  ShoppingBag } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "All Products",
    url: "/dashboard/all-products",
    icon: BaggageClaim,
  },
  {
    title: "Add Product",
    url: "/dashboard/add-product",
    icon: CirclePlus,
  }
]

export function AppSidebar() {
  return (
    <Sidebar   variant="sidebar">
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton size={'lg'}  asChild>
                    <Link href={item.url} >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
