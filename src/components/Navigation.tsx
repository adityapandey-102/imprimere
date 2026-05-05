'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Your Brand
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/#design" className="text-gray-700 hover:text-blue-600 transition">
              Design
            </Link>
            <Link href="/#impact" className="text-gray-700 hover:text-blue-600 transition">
              Impact
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/#about"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              About
            </Link>
            <Link
              href="/#design"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Design
            </Link>
            <Link
              href="/#impact"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Impact
            </Link>
            <Link
              href="/#contact"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
