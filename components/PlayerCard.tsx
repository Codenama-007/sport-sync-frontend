"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  username: string;
  bio: string;
  location: string;
}

export default function ProfileCard({
  username,
  bio,
  location,
}: ProfileCardProps) {
  const initial = username.charAt(0).toUpperCase();
  const handle_click = () => {
    alert(" Challenge was send  ")
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border bg-background shadow-md transition hover:shadow-lg">
      {/* Avatar */}
      <div className="flex h-48 items-center justify-center bg-primary">
        <span className="text-7xl font-bold text-primary-foreground">
          {initial}
        </span>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">
        <div>
          <h2 className="text-2xl font-bold">{username}</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {bio}
          </p>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <Button onClick={handle_click} className="w-full bg-green-300 text-black">
          Challenge
        </Button>
      </div>
    </div>
  );
}