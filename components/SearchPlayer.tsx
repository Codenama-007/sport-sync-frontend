"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="mb-8 flex w-full max-w-md items-center gap-2">
      <Search className="text-muted-foreground" />

      <Input
        placeholder="Search players..."
      />
    </div>
  );
}