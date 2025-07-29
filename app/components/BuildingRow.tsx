import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

interface Building {
    imageUrl: string
    department: string
    number: string
    address: string
    rooms: number
    date: string
}

interface Props {
    building: Building
}

export default function BuildingRow({ building }: Props) {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={building.imageUrl} alt="Building" width={120}
                            height={120}
                            className="object-contain max-w-full max-h-full" />
                    </div>
                </div>
            </td>
            <td>{building.department}</td>
            <td>{building.number}</td>
            <td>{building.address}</td>
            <td>{building.rooms}</td>
            <td>{building.date}</td>
            <td>
                <div className="flex gap-4">
                    <button className="text-[#0E98D8] hover:text-sky-500 cursor-pointer">
                        <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="text-[#0E98D8] hover:text-sky-500 cursor-pointer">
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

