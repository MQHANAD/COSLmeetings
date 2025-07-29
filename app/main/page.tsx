import React from 'react'
import Head from 'next/head';
import BuildingCard from '../components/buildingCard';


const buildings = [
  {
    id: 1,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 1",
    address: "123 Energy Rd, Houston, TX",
    image: "../assets/building.jpg", // Adjust the path as necessary
  },
  {
    id: 2,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 2",
    address: "456 Petroleum Ave, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 3,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 3",
    address: "789 Oilfield Dr, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 4,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 1",
    address: "123 Energy Rd, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 5,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 2",
    address: "456 Petroleum Ave, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 6,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 3",
    address: "789 Oilfield Dr, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 7,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 1",
    address: "123 Energy Rd, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 8,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 2",
    address: "456 Petroleum Ave, Houston, TX",
    image: "../assets/building.jpg",
  },
  {
    id: 9,
    title: "Oilfield Chemicals R&D institute COSL",
    buildingNumber: "Building 3",
    address: "789 Oilfield Dr, Houston, TX",
    image: "../assets/building.jpg",
  },
  // Repeat or add more mock entries as needed
];


const buidlingbrows = () => {
  return (
    <div>
      <Head>
        <title>Buildings and Departments</title>
      </Head>
      <main className="max-w-6xl mx-auto px-4 pb-9 pt-4">
        <h1 className="text-4xl font-bold mb-8 text-black">Buildings and Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {buildings.map((building) => (
            <BuildingCard
              key={building.id}
              title={building.title}
              buildingNumber={building.buildingNumber}
              address={building.address}
              image={building.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default buidlingbrows