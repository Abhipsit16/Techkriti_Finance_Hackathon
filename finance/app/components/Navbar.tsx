"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/30 backdrop-blur-md shadow-md z-50 px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        FinSight AI
      </div>
      <ul className="flex gap-8 text-lg font-medium text-gray-700">
        <li>
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/upload"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Upload
          </Link>
        </li>
        <li>
          <Link
            href="/ask"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Ask AI
          </Link>
        </li>
        <li>
          <Link
            href="/learn"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Learn
          </Link>
        </li>
        <li>
          <Link
            href="/analysis"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Analysis
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
