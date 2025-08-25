import React from 'react';
import BuildingTable from '../../components/BuildingTable'
import Link from 'next/link';

export interface Building {
  imageUrl: string
  department: string
  number: string
  address: string
  rooms: number
  date: string
}

const dummyBuildings: Building[] = Array(7).fill({
  imageUrl: '../assets/building.jpg',
  department: 'Oilfield Chemical...',
  number: 'building number',
  address: '7305477760',
  rooms: 30,
  date: '08-Dec, 2021',
})

export default function BuildingsPage() {
  return (
    <div className="pt-6 pl-6 pr-6">
      <h1 className="text-4xl font-bold mb-6 text-black">My Buildings</h1>
      <div className="flex justify-end mb-4">
        <Link href={'/addingBuilding'}>
          <button className="btn btn-primary bg-[#0E98D8] border-[#0E98D8] shadow-[#0E98D8] shadow-2xs">ADD NEW Building</button>
        </Link>
      </div>
      <BuildingTable buildings={dummyBuildings} />
    </div>
  )
}
