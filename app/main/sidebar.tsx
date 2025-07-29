'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export function Sidebar() {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState<string | null>(null)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    useEffect(() => {
        if (pathname) {
            setActiveLink(pathname)
        }
    }, [pathname])

    const navItems = [
        { href: "/main", label: "Buildings" },
        { href: "/main/meetings", label: "My Meetings" },
        { href: "/main/Admin", label: "Admin" }
    ]

    return (
        <>
            {/* Mobile Menu Button (visible only on small screens) */}
            <button
                className="md:hidden fixed top-1.5 left-1 z-50 p-2 bg-white rounded-md"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <FiX size={24} className='text-black' /> : <FiMenu size={24} className='text-black' />}
            </button>

            {/* Sidebar - Responsive Behavior */}
            <aside className={`
        fixed left-0 top-0 bottom-0 w-52 bg-white text-black overflow-y-auto z-[40]
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
                <div className={`flex flex-row justify-start items-start ml-8 lg:ml-0`}>
                    <Image
                        src="/assets/logo.PNG"
                        alt="Platform"
                        width={60}
                        height={60}
                        className="object-contain max-w-full max-h-full ml-6 mt-6"
                    />
                    <p className='text-xs pt-7.5 pl-1'>Meetings</p>
                </div>
                <div className='w-44 h-0.5 bg-gray-200 mt-2 ml-4'></div>

                <h1 className='pl-4 pt-4'>welcome back 👋🏻</h1>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <li key={item.href}>
                                {index === 2 && <div className='w-44 h-0.5 bg-gray-200 my-2'></div>}
                                <Link
                                    href={item.href}
                                    className={`block p-2 rounded transition-colors ${activeLink === item.href ||
                                        (activeLink?.startsWith(`${item.href}/`) && item.href !== "/main")
                                        ? 'bg-[rgba(14,152,216,0.1)] text-[rgba(14,152,216)]'
                                        : 'hover:bg-[rgba(14,152,216,0.1)]'
                                        }`}
                                    onClick={() => {
                                        setActiveLink(item.href)
                                        setIsMobileOpen(false) // Close sidebar on mobile after selection
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Overlay for mobile (visible when sidebar is open) */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    )
}