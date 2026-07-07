"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-2xl">
                        B
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-orange-400">
                            BMSC INDIA
                        </h1>

                        <p className="text-xs text-gray-300">
                            Birsa Munda Service Center
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-white font-medium">

                    <Link
                        href="/"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Home
                    </Link>

                    <a
                        href="#services"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Services
                    </a>

                    <a
                        href="#about"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Contact
                    </a>

                    <Link href="/register">
                        <button className="border border-orange-500 hover:bg-orange-500 px-5 py-2 rounded-lg font-semibold transition">
                            Register
                        </button>
                    </Link>

                    <Link href="/login">
                        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold transition">
                            Login
                        </button>
                    </Link>

                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl">
                    <FaBars />
                </button>

            </div>
        </header>
    );
}