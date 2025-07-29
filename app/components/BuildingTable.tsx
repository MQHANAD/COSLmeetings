import BuildingRow from './BuildingRow'

interface Building {
  imageUrl: string
  department: string
  number: string
  address: string
  rooms: number
  date: string
}

interface Props {
  buildings: Building[]
}

export default function BuildingTable({ buildings }: Props) {
  return (
    <div className="overflow-x-auto text-black">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Department</th>
            <th>Number</th>
            <th>Address</th>
            <th>Number of Rooms</th>
            <th>Date of admission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((building, idx) => (
            <BuildingRow key={idx} building={building} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
