// components/Nav.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscHome } from "react-icons/vsc";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

export default function Nav() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home', icon: VscHome },
        { href: '/timeline', label: 'Timeline', icon: RiTimeLine },
        { href: '/stats', label: 'Stats', icon: ImStatsDots },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 py-5 shadow-sm">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                
                {/* Simple Text Logo */}
                <Link href="/" className="flex items-center">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tighter">
                        KinKeeper
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-3">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-base font-medium transition-all duration-200
                                    ${isActive 
                                        ? 'bg-violet-600 text-white shadow-md' 
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon className="text-2xl" />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}