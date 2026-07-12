"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 tracking-wide"
        >
          SportSync
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>
          <Link href={"/login"}>
            <Button className= 'shadow-md'>Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button className= 'shadow-md'>Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link href={"/login"}>
              <Button className= 'shadow-md'>Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className= 'shadow-md'>Register</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}