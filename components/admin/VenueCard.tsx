"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, MapPin, Users } from "lucide-react";

interface VenueCardProps {
  venueName: string;
  ownerName: string;
  city: string;
  sport: string;
  capacity: number;
}

export default function VenueCard({
  venueName,
  ownerName,
  city,
  sport,
  capacity,
}: VenueCardProps) {
  const initial = venueName.charAt(0).toUpperCase();

  return (
    <Card className="w-full transition-all hover:shadow-lg mb-2.5">
      <CardContent className="flex items-center justify-between p-5">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Venue Initial */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            {initial}
          </div>

          {/* Venue Details */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">
                {venueName}
              </h3>

              <BadgeCheck
                size={18}
                className="fill-green-500 text-white"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Owner: {ownerName}
            </p>

            <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {city}
              </span>

              <span>{sport}</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 text-lg font-bold">
            <Users size={18} />
            {capacity}
          </div>

          <p className="text-xs text-muted-foreground">
            Capacity
          </p>
        </div>
      </CardContent>
    </Card>
  );
}