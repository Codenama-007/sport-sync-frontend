import { AppSidebar } from "@/components/Sidebar";
import NotificationCard from "@/components/NotificationCard";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function NotificationsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center gap-3 border-b px-6">
          <SidebarTrigger />

          <h1 className="text-xl font-bold">
            Notifications
          </h1>
        </header>

        <main className="flex flex-col items-center gap-6 p-8">
          <NotificationCard
            username="Rahul Sharma"
            sport="Football"
            location="Andheri Sports Complex"
            date="12 July 2026"
            time="6:00 PM"
          />

          <NotificationCard
            username="Ayesha Khan"
            sport="Badminton"
            location="Powai Sports Club"
            date="14 July 2026"
            time="8:30 AM"
          />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}