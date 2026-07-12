import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
// import ProfileCard from "@/components/ProfileCard";
import SearchBar from "@/components/SearchPlayer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ProfileCard from "@/components/PlayerCard";


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4">
          <SidebarTrigger />
        </header>

        <main className="p-6">
          {/* Your page content */}
          <SearchBar/>
          <ProfileCard
  username="Affan Shah"
  bio="Football enthusiast looking for weekend matches."
  location="Mumbai, Maharashtra"
/>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}