"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

interface VerifiedProfileCardProps {
  username: string;
  fullName: string;
  email: string;
  city: string;
  favouriteSport: string;
  level: string;
}

export default function VerifiedProfileCard({
  username,
  fullName,
  email,
  city,
  favouriteSport,
  level,
}: VerifiedProfileCardProps) {
  const initial = fullName.charAt(0).toUpperCase();

  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2.5">
      <CardContent className="flex flex-col items-center p-6">
        {/* Avatar */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-4xl font-bold text-white">
          {initial}
        </div>

        {/* Name */}
        <div className="mt-4 flex items-center gap-2">
          <h2 className="text-xl font-bold">{fullName}</h2>

          <BadgeCheck
            size={20}
            className="fill-green-500 text-white"
          />
        </div>

        {/* Username */}
        <p className="text-sm text-muted-foreground">
          @{username}
        </p>

        {/* Email */}
        <p className="mt-3 text-sm">
          {email}
        </p>

        {/* Details */}
        <div className="mt-6 w-full space-y-3 rounded-xl bg-muted/40 p-4">

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              City
            </span>

            <span className="font-medium">
              {city}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Favourite Sport
            </span>

            <span className="font-medium">
              {favouriteSport}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Level
            </span>

            <span className="font-medium">
              {level}
            </span>
          </div>
        </div>

        {/* Status */}
        <span className="mt-6 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
          ✓ Verified Player
        </span>
      </CardContent>
    </Card>
  );
}