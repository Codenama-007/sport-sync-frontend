"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Activity, MapPin, Trophy } from "lucide-react";

interface ActivePlayerCardProps {
  username: string;
  fullName: string;
  city: string;
  favouriteSport: string;
  level: string;
  matchesPlayed: number;
}

export default function ActivePlayerCard({
  username,
  fullName,
  city,
  favouriteSport,
  level,
  matchesPlayed,
}: ActivePlayerCardProps) {
  const initial = fullName.charAt(0).toUpperCase();

  return (
    <Card className="w-full transition-all hover:shadow-lg mb-2.5">
      <CardContent className="flex items-center justify-between p-5">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            {initial}
          </div>

          {/* Player Details */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                {fullName}
              </h3>

              <Activity
                size={18}
                className="text-green-500"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              @{username}
            </p>

            <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {city}
              </span>

              <span>{favouriteSport}</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right space-y-1">
          <div className="flex items-center justify-end gap-1 font-semibold">
            <Trophy size={18} />
            {level}
          </div>

          <p className="text-sm text-muted-foreground">
            {matchesPlayed} Matches
          </p>

          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        </div>
      </CardContent>
    </Card>
  );
}