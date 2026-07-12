import React from 'react'
import { AppSidebar } from '@/components/admin/Sidebar'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
// import {TableDemo} from "@/components/admin/UserTable"
// import VerifiedProfileCard from '@/components/admin/VerifiedProfileCard'
// import VenueCard from '@/components/admin/VenueCard'
// import ActivePlayerCard from '@/components/admin/ActivePlayerCard'
import MatchCard from '@/components/admin/MatchCard'


const page = () => {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <header className="flex h-16 items-center border-b px-4 mt-1">
                    <SidebarTrigger />
                </header>

                <main className="p-6">
                    <MatchCard
                        matchTitle="Sunday Football League"
                        sport="Football"
                        venue="Elite Football Arena"
                        city="Mumbai"
                        date="12 July 2026"
                        playersJoined={18}
                        maxPlayers={22}
                    />

                    <MatchCard
                        matchTitle="Morning Cricket Practice"
                        sport="Cricket"
                        venue="Champions Ground"
                        city="Pune"
                        date="13 July 2026"
                        playersJoined={15}
                        maxPlayers={22}
                    />

                    <MatchCard
                        matchTitle="Evening Badminton Doubles"
                        sport="Badminton"
                        venue="Smash Club"
                        city="Delhi"
                        date="14 July 2026"
                        playersJoined={8}
                        maxPlayers={8}
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