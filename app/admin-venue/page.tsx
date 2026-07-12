import React from 'react'
import { AppSidebar } from '@/components/admin/Sidebar'
import { SidebarProvider , SidebarTrigger , SidebarInset} from '@/components/ui/sidebar'
// import {TableDemo} from "@/components/admin/UserTable"
// import VerifiedProfileCard from '@/components/admin/VerifiedProfileCard'
import VenueCard from '@/components/admin/VenueCard'


const page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4 mt-1">
          <SidebarTrigger />
        </header>

        <main className="p-6">
            <VenueCard
    venueName="Elite Football Arena"
    ownerName="John Smith"
    city="Mumbai"
    sport="Football"
    capacity={120}
  />

  <VenueCard
    venueName="Smash Badminton Club"
    ownerName="Sarah Khan"
    city="Pune"
    sport="Badminton"
    capacity={60}
  />

  <VenueCard
    venueName="Champions Cricket Ground"
    ownerName="Ahmed Ali"
    city="Delhi"
    sport="Cricket"
    capacity={500}
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