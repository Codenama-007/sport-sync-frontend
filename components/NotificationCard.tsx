"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

interface NotificationCardProps {
  username: string;
  sport: string;
  location: string;
  date: string;
  time: string;
}

export default function NotificationCard({
  username,
  sport,
  location,
  date,
  time,
}: NotificationCardProps) {
  const initial = username.charAt(0).toUpperCase();

  return (
    <div className="w-full max-w-2xl rounded-2xl border bg-background p-6 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          New Challenge
        </span>

        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          {sport}
        </span>
      </div>

      {/* Body */}
      <div className="mt-5">
        <h2 className="text-xl font-bold">
          {username} challenged you!
        </h2>

        <p className="mt-2 text-muted-foreground">
          You have received a play request. Check the details below and
          choose whether you'd like to join.
        </p>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <CalendarDays className="h-4 w-4 text-blue-600" />
          <span>
            {date} • {time}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span>{location}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            {initial}
          </div>

          <span className="font-semibold">{username}</span>
        </div>

        <div className="flex gap-3">
          <Button variant="destructive">
            Reject
          </Button>

          <Button className="bg-green-600 hover:bg-green-700">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}