import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'COSL Meeting - Adding Room',
    description: 'add your building details here',
}

export default function roomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="fixed inset-0 flex flex-col bg-white">
                    {/* Responsive Header */}
                    <header className="fixed top-0 left-0 right-0 h-14 bg-white text-black shadow-md z-[40] flex items-center px-4">
                        <div className="flex flex-1 items-center justify-between">
                            <div className='flex flex-row'>
                            {/* Logo and Title - Left Side */}
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <Image
                                        src="/assets/logo.PNG"
                                        alt="Platform"
                                        width={60}
                                        height={60}
                                        className="object-contain w-14 h-14 sm:w-20 sm:h-20"
                                    />
                                    <p className="text-xs sm:text-sm ml-1 sm:ml-2 mt-0.5">Meetings</p>
                                </div>
                            </div>

                            {/* Search Bar - Center (hidden on mobile) */}
                            <div className=" md:flex flex-1 max-w-md mx-4 mt-3 md:mt-6">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered md:w-96 h-8 bg-white text-black border-gray-300"
                                />
                            </div>
                            </div>

                            {/* Navigation Icons - Right Side */}
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                {/* Icon 1 */}
                                <button className="btn btn-ghost btn-circle hover:bg-[rgba(14,152,216,0.1)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                        />
                                    </svg>
                                </button>

                                {/* Notifications with dropdown */}
                                <div className="dropdown dropdown-end">
                                    <button
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle hover:bg-[rgba(14,152,216,0.1)]"
                                    >
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="black"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                />
                                            </svg>
                                            <span className="badge badge-xs badge-primary indicator-item bg-[#0E98D8] border-[#0E98D8]"></span>
                                        </div>
                                    </button>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                                    >
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">Notifications</a>
                                        </li>
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">Messages</a>
                                        </li>
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">Alerts</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* User Profile with dropdown */}
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-8 sm:w-10 rounded-full">
                                            <img
                                                alt="User profile"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                                    >
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">My Documents</a>
                                        </li>
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">Edit Profile</a>
                                        </li>
                                        <li>
                                            <a className="hover:bg-[rgba(14,152,216,0.1)]">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <div className="flex flex-1 h-0.5">
                        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-[rgba(255,255,255,0)] z-[35] md:h-[100lvh] ml-3">
                            <div className="pb-16 md:pb-0">
                                {children}
                            </div>
                        </main>
                    </div>

                    {/* Responsive Footer */}
                    <footer className="fixed bottom-0 left-0 right-0 h-96 md:h-96 bg-gray-700 z-30">
                        <div className="w-full h-full">
                            <svg
                                viewBox="0 0 1200 100"
                                preserveAspectRatio="none"
                                className="w-full h-full"
                            >
                                <image
                                    href="/assets/footer.svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="none"
                                />
                            </svg>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}