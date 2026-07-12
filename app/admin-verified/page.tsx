import React from 'react'
import { AppSidebar } from '@/components/admin/Sidebar'
import { SidebarProvider , SidebarTrigger , SidebarInset} from '@/components/ui/sidebar'
// import {TableDemo} from "@/components/admin/UserTable"
import VerifiedProfileCard from '@/components/admin/VerifiedProfileCard'


const page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4 mt-1">
          <SidebarTrigger />
        </header>

        <main className="p-6">
            <VerifiedProfileCard
        username="johnsmith"
        fullName="John Smith"
        email="john@gmail.com"
        city="Mumbai"
        favouriteSport="Football"
        level="Intermediate"
      />

      <VerifiedProfileCard
        username="sarahkhan"
        fullName="Sarah Khan"
        email="sarah@gmail.com"
        city="Pune"
        favouriteSport="Badminton"
        level="Professional"
      />
            {/* <TableDemo/> */}
          {/* <ProfileCard/> */}
          {/* Your page content */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default page