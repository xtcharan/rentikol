interface SectorCardProps {
  icon: string;
  name: string;
}

export default function SectorCard({ icon, name }: SectorCardProps) {
  return (
    <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition duration-300 cursor-pointer">
      <div className="text-4xl mb-3">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}