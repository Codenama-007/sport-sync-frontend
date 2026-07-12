"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";

interface MatchCardProps {
  matchTitle: string;
  sport: string;
  venue: string;
  city: string;
  date: string;
  playersJoined: number;
  maxPlayers: number;
}

export default function MatchCard({
  matchTitle,
  sport,
  venue,
  city,
  date,
  playersJoined,
  maxPlayers,
}: MatchCardProps) {
  const initial = sport.charAt(0).toUpperCase();

  return (
    <Card className="w-full transition-all hover:shadow-lg mb-2.5">
      <CardContent className="flex items-center justify-between p-5">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Sport Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
            {initial}
          </div>

          {/* Match Details */}
          <div>
            <h3 className="text-lg font-semibold">
              {matchTitle}
            </h3>

            <p className="text-sm text-muted-foreground">
              {sport}
            </p>

            <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {venue}, {city}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right space-y-2">

          <div className="flex items-center justify-end gap-1 text-sm">
            <CalendarDays size={16} />
            {date}
          </div>

          <div className="flex items-center justify-end gap-1 font-semibold">
            <Users size={18} />
            {playersJoined}/{maxPlayers}
          </div>

          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            Match Created
          </span>
        </div>
      </CardContent>
    </Card>
  );
}