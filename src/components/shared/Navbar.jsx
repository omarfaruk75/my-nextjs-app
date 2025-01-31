
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    MyWebsite
                </Link>
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/about" className="text-white hover:text-gray-200">About</Link>
                    <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
                    <Link href="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                    <Link href="/login" className="text-white hover:text-gray-200">Login</Link>
                    <Link href="/register" className="text-white hover:text-gray-200">Register</Link>
                </div>
            </div>
        </nav>
    );
}