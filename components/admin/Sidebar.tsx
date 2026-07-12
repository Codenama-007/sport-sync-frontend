"use client";

import Link from "next/link";
import {
    Search,
    User,
    Bell,
    LogOut,
    Trophy,
} from "lucide-react";

import { UserSquare } from "lucide-react";
import { Activity } from "lucide-react";
import { Handshake } from "lucide-react";
import { LocateIcon } from "lucide-react";
import { VerifiedIcon } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
    {
        title: "Total Users",
        url: "/admin",
        icon: UserSquare,
    },
    {
        title: "Active Players Today",
        url: "/admin-active",
        icon: Activity,
    },
    {
        title: "Matches Created",
        url: "/admin-match",
        icon: Handshake,
    },
    {
        title : "Venues registered" ,
        url : '/admin-venue' ,
        icon : LocateIcon
    } ,
    {
        title : "Verified Profiles" ,
        url : '/admin-verified' ,
        icon : VerifiedIcon
    }
];

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            {/* Logo */}
            <SidebarHeader className="border-b">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-2 py-3"
                >
                    <Trophy className="h-6 w-6 text-blue-600" />
                    <span className="text-lg font-bold">SportSync</span>
                </Link>
            </SidebarHeader>

            {/* Navigation */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton >
                                    <Link
                                        href={item.url}
                                        className="flex items-center gap-2"
                                    >
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="border-t">
                <div className="space-y-3 p-2">
                    <div>
                        <p className="font-medium">Admin</p>
                        <p className="text-sm text-muted-foreground">
                            affan@example.com
                        </p>
                    </div>

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <LogOut />
                                <span onClick={() => {}}>Logout</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}