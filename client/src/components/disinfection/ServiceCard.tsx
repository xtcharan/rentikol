interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
  hasImage?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  buttonText = "Find out more", 
  buttonLink = "#",
  bgColor = "white",
  hasImage = false
}: ServiceCardProps) {
  // The design from the reference image shows a white card with text content
  return (
    <div className={`bg-${bgColor} p-4 border border-gray-200 h-full flex flex-col`}>
      <h3 className="text-lg font-semibold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4 flex-grow">{description}</p>
      <div>
        <a 
          href={buttonLink} 
          className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-1.5 text-sm font-medium transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}