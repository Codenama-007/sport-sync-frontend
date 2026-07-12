import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4">
          <SidebarTrigger />
        </header>

        <main className="p-6">
          <ProfileCard/>
          {/* Your page content */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}