import Link from "next/link"

interface Room {
    id: number
    imageUrl: string
    roomNumber: string
    buildingNumber: string
    capacity: number
    status: 'Available' | 'Out of Service' | 'Under Maintenance'
}

interface Props {
    room: Room
}

export default function RoomCard({ room }: Props) {
    const statusColor =
        room.status === 'Available'
            ? 'bg-green-500'
            : room.status === 'Under Maintenance'
                ? 'bg-yellow-500'
                : 'bg-red-500'

    const isUnavailable = room.status !== 'Available'

    return (
        <Link href={"/roomDetails"} className={`card bg-base-100 shadow-sm ${isUnavailable ? 'opacity-50 bg-white' : 'bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg active:scale-95'
            }`}>
            <figure>
                <img src={room.imageUrl} alt={room.roomNumber} className="w-full h-40 object-cover text-black" />
            </figure>
            <div className="card-body p-4">
                <h2 className="text-lg font-semibold text-black">{room.roomNumber}</h2>
                <p className="text-sm text-black">{room.buildingNumber}</p>
                <p className="text-sm text-gray-600">Capacity: {room.capacity} person</p>
                <div className="mt-2">
                    <span className={`badge ${statusColor} text-white`}>{room.status}</span>
                </div>
            </div>
        </Link>
    )
}
