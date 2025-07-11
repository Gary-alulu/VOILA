import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export default function ProductCard({ name, description, image, alt }: ProductCardProps) {
  return (
    <div className="w-full sm:w-48 bg-light-bg-alt rounded-lg p-4 flex flex-col items-center shadow-md">
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="relative w-full h-32 sm:w-32 sm:h-32 bg-gray-300 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
