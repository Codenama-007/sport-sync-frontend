import React from 'react'
import { AppSidebar } from '@/components/admin/Sidebar'
import { SidebarProvider , SidebarTrigger , SidebarInset} from '@/components/ui/sidebar'
import {TableDemo} from "@/components/admin/UserTable"


const page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4 mt-1">
          <SidebarTrigger />
        </header>

        <main className="p-6">
            <TableDemo/>
          {/* <ProfileCard/> */}
          {/* Your page content */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default page