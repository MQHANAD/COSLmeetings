// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden w-full ">
                {/* Left Side (Image Placeholder) */}
                <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white relative">
                    <div className="relative w-full h-[550px]">

                        <div className="absolute bottom-0 left-0 right-0 w-full h-auto">
                            <Image
                                src="/assets/footer.svg"
                                alt="Footer"
                                width={400}
                                height={100}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/assets/vector2.svg"
                                alt="Decoration"
                                width={400}
                                height={400}
                                className="object-contain max-w-full max-h-full mix-blend-multiply"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/assets/platform.PNG"
                                alt="Platform"
                                width={400}
                                height={400}
                                className="object-contain max-w-full max-h-full"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-start justify-start p-4">
                            <Image
                                src="/assets/logo.PNG"
                                alt="Platform"
                                width={60}
                                height={60}
                                className="object-contain max-w-full max-h-full"
                            />
                            <p className='text-xs p-1.5 text-black'>Meetings</p>
                        </div>
                    </div>
                </div>
                {/* Right Side (Login Form) */}
                <div className="w-full md:w-1/2 p-6 mt-auto mb-auto">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome to COSL Meetings</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E98D8]"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E98D8]"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center text-sm text-gray-700">
                                <input type="checkbox" className="mr-2 accent-[#0E98D8]" />
                                Remember this Device
                            </label>
                            <a href="#" className="text-sm text-[#0E98D8] hover:underline">Forgot Password ?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0E98D8] text-white py-2 rounded-md hover:bg-[#2F9FDF] transition duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        New to COSL Meeting?{" "}
                        <Link href="/signup" className="text-[#0E98D8] hover:underline">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
