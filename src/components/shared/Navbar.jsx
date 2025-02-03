
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    MyWebsite
                </Link>

                <div className={`md:flex space-x-6`}>
                    <Link href="/about" className={pathName == "/about" ? "text-blue-300 underline" : "text-white hover:text-gray-200"}>About</Link>
                    <Link href="/contact" className={pathName == "/contact" ? "text-blue-300 underline" : "text-white hover:text-gray-200"}>Contact</Link>
                    <Link href="/gallery" className={pathName == "/gallery" ? "text-blue-300 underline" : "text-white hover:text-gray-200"}>Gallery</Link>
                    <Link href="/products" className={pathName == "/products" ? "text-blue-300 underline" : "text-white hover:text-gray-200"}>Products</Link>
                    <Link href="/posts" className={pathName == "/posts" ? "text-blue-300 underline" : "text-white hover:text-gray-200"}>Posts</Link>
                </div>
            </div>
        </nav>
    );
}