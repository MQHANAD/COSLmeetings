// components/RoomInfo.tsx
import React from 'react'
import Image from 'next/image';

type Props = {
    data: {
        image: string | Blob | undefined
        name: string
        status: string
        capacity: number
        equipment: string[]
        nextMeeting: string
    }
}

export default function RoomInfo({ data }: Props) {
    return (
        <section className="mb-8 text-black">
            <div className="grid md:grid-cols-3 gap-4 mb-20">
                {/* Left column - tall image */}
                <div className="bg-base-100 shadow-md rounded row-span-2 h-full">
                    <img
                    src={data.image}
                    alt="department"
                    width={48}
                    height={48}
                    className="w-full h-[450px] rounded mr-3 sm:mr-4 object-cover flex-shrink-0 "
                />
                </div>
                {/* Right two columns - four smaller images */}
                <div className="bg-base-100 shadow-md rounded "> 
                    <img
                    src={data.image}
                    alt="department"
                    width={48}
                    height={48}
                    className="w-full h-[218px] rounded mr-3 sm:mr-4 object-cover flex-shrink-0 "
                />
                </div>
                <div className="bg-base-100 shadow-md rounded">
                    <img
                    src={data.image}
                    alt="department"
                    width={48}
                    height={48}
                    className="w-full h-[218px] rounded mr-3 sm:mr-4 object-cover flex-shrink-0"
                />
                </div>
                <div className="bg-base-100 shadow-md rounded">
                    <img
                    src={data.image}
                    alt="department"
                    width={48}
                    height={48}
                    className="w-full h-[218px] rounded mr-3 sm:mr-4 object-cover flex-shrink-0"
                />
                </div>
                <div className="bg-base-100 shadow-md rounded">
                    <img
                    src={data.image}
                    alt="department"
                    width={48}
                    height={48}
                    className="w-full h-[218px] rounded mr-3 sm:mr-4 object-cover flex-shrink-0"
                /></div>
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-row space-x-4'>
                    <h2 className="text-xl font-semibold">{data.name}</h2>
                    <p className="badge badge-success">{data.status}</p>
                </div>
                <div className=" flex gap-2">
                    <button className="btn btn-primary bg-[#0E98D8] border-[#0E98D8] shadow-2xs">Edit</button>
                    <button className="btn btn-primary bg-[#0E98D8] border-[#0E98D8] shadow-2xs">Book</button>
                </div>
            </div>

            <div className='flex flex-row space-x-4'>
                <p className="">• Capacity: {data.capacity} person</p>
                <p>• Equipment: {data.equipment.join(', ')}</p>
                <p className="text-sm text-gray-500 mt-0.5">• Next Meeting: {data.nextMeeting}</p>
            </div>
        </section>
    )
}
