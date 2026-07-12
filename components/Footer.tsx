import Link from "next/link";
import {
  Trophy,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="body-font border-t text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center font-semibold text-gray-900 md:justify-start"
        >
          <div className="rounded-full bg-blue-600 p-2">
            <Trophy className="h-6 w-6 text-white" />
          </div>

          <span className="ml-3 text-xl font-bold">SportSync</span>
        </Link>

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:pl-4 sm:py-2">
          © {new Date().getFullYear()} SportSync. All rights reserved.
        </p>

        {/* Navigation */}
        <div className="mt-4 flex items-center gap-6 sm:ml-8 sm:mt-0">
          <Link
            href="/"
            className="text-sm transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm transition hover:text-blue-600"
          >
            About
          </Link>
        </div>

        {/* Social Icons */}
        <span className="mt-4 inline-flex gap-4 sm:ml-auto sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            Instagram
          </a>

          <a href="#" className="text-gray-500 hover:text-sky-500">
            Facebook
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Twitter
          </a>

          <a href="#" className="text-gray-500 hover:text-blue-700">
            LinkedIN
          </a>
        </span>
      </div>
    </footer>
  );
}