interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-red-500 mb-4">
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
    </div>
  );
}