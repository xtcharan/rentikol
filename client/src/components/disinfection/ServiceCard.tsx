interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  buttonText = "Find out more", 
  buttonLink = "#" 
}: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] group">
      <img 
        src={imageUrl}
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <a 
          href={buttonLink} 
          className="inline-block bg-white text-flickBlue-dark hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}