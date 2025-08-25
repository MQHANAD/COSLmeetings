// components/BuildingCard.tsx
import Link from 'next/link';

type BuildingCardProps = {
  title: string;
  buildingNumber: string;
  address: string;
  image: string;
  href?: string;
};

export default function BuildingCard({
  title,
  buildingNumber,
  address,
  image,
  href = '/rooms',
}: BuildingCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:shadow-lg active:scale-95"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{buildingNumber}</p>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
      </div>
    </Link>
  );
}

