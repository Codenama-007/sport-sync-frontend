"use client";

import {
  Mail,
  MapPin,
  Trophy,
  User,
} from "lucide-react";

export default function ProfileCard() {
  // Later these values will come from your API
  const user = {
    full_name: "Affan Shah",
    email: "affan@example.com",
    city: "Mumbai",
    favorite_sport: "Football",
    bio: "Love football, cricket and building awesome software.",
    age: 21,
  };

  const initial = user.full_name.charAt(0).toUpperCase();

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">

      {/* Header */}
      <div className="flex flex-col items-center bg-blue-600 py-8 text-white">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold text-blue-600 shadow-lg">
          {initial}
        </div>

        <h1 className="mt-4 text-2xl font-bold">
          {user.full_name}
        </h1>

        <p className="text-blue-100">
          Sports Enthusiast
        </p>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6">

        <p className="text-center text-muted-foreground">
          {user.bio}
        </p>

        <div className="flex items-center gap-3">
          <Trophy className="size-5 text-blue-600" />
          <span>{user.favorite_sport}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="size-5 text-blue-600" />
          <span>{user.city}</span>
        </div>

        <div className="flex items-center gap-3">
          <User className="size-5 text-blue-600" />
          <span>{user.age} years old</span>
        </div>

        
      </div>
    </div>
  );
}