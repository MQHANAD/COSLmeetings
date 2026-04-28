'use client';
import Link from 'next/link';
import RoomCard from '../components/RoomCard'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


interface Room {
    id: number
    imageUrl: string
    roomNumber: string
    buildingNumber: string
    capacity: number
    status: 'Available' | 'Out of Service' | 'Under Maintenance'
}



export default function RoomsPage() {
    const router = useRouter();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/rooms')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch rooms');
                return res.json();
            })
            .then((data) => {
                setRooms(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    const availableRooms = rooms.filter((room) => room.status === 'Available')
    const unavailableRooms = rooms.filter((room) => room.status !== 'Available')

    return (
        <div className="p-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className='flex flex-row items-center space-x-2'>
                    <Link href={'/main'}>
                        <button
                            className="flex items-center text-black hover:text-gray-700 cursor-pointer"
                            aria-label="Go back"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 sm:h-10 sm:w-10 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Link>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                        Oilfield Chemicals R&D institute COSL
                    </h1>
                </div>
                <Link href={'/addingRoom'}>
                    <button className="btn btn-primary bg-[#0E98D8] shadow-2xs border-[#0E98D8] hover:bg-sky-600 w-full sm:w-auto">
                        ADD NEW Room
                    </button>
                </Link>
            </div>

            {isLoading && <p className="text-black">Loading rooms...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!isLoading && !error && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {availableRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>

            <h1 className="text-2xl font-bold mb-4 text-black">Unavailable</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {unavailableRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
                </>
            )}
        </div>
    )
}
