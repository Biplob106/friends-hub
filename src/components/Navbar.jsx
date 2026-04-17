"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaClock,
  FaChartPie
} from "react-icons/fa";

import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    pathname === path
      ? "flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg"
      : "flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg";

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}

        <Link href="/" className="text-2xl font-bold text-indigo-600">
          KeenKeeper
        </Link>

        {/* Desktop */}

        <div className="hidden md:flex gap-4">

          <Link href="/" className={linkClass("/")}>
            <FaHome />
            Home
          </Link>

          <Link href="/timeline" className={linkClass("/timeline")}>
            <FaClock />
            Timeline
          </Link>

          <Link href="/stats" className={linkClass("/stats")}>
            <FaChartPie />
            Stats
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >

          {open ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden flex flex-col items-center gap-3 pb-4">

          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            <FaHome />
            Home
          </Link>

          <Link
            href="/timeline"
            className={linkClass("/timeline")}
            onClick={() => setOpen(false)}
          >
            <FaClock />
            Timeline
          </Link>

          <Link
            href="/stats"
            className={linkClass("/stats")}
            onClick={() => setOpen(false)}
          >
            <FaChartPie />
            Stats
          </Link>

        </div>

      )}

    </nav>

  );
};

export default Navbar;