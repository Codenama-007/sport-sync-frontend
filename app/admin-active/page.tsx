import React from 'react'
import { AppSidebar } from '@/components/admin/Sidebar'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
// import {TableDemo} from "@/components/admin/UserTable"
// import VerifiedProfileCard from '@/components/admin/VerifiedProfileCard'
// import VenueCard from '@/components/admin/VenueCard'
import ActivePlayerCard from '@/components/admin/ActivePlayerCard'


const page = () => {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <header className="flex h-16 items-center border-b px-4 mt-1">
                    <SidebarTrigger />
                </header>

                <main className="p-6">
                    <ActivePlayerCard
                        username="johnsmith"
                        fullName="John Smith"
                        city="Mumbai"
                        favouriteSport="Football"
                        level="Intermediate"
                        matchesPlayed={34}
                    />

                    <ActivePlayerCard
                        username="sarahkhan"
                        fullName="Sarah Khan"
                        city="Pune"
                        favouriteSport="Badminton"
                        level="Professional"
                        matchesPlayed={87}
                    />

                    <ActivePlayerCard
                        username="ahmedali"
                        fullName="Ahmed Ali"
                        city="Delhi"
                        favouriteSport="Cricket"
                        level="Advance"
                        matchesPlayed={52}
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