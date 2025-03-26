interface PartnerLogoProps {
  logo: string;
  name: string;
}

export default function PartnerLogo({ logo, name }: PartnerLogoProps) {
  // Based on the reference image, partner logos are displayed in grayscale with a certain height
  return (
    <div className="flex items-center justify-center p-2">
      <img 
        src={logo} 
        alt={name} 
        className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all" 
      />
    </div>
  );
}