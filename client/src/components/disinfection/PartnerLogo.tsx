interface PartnerLogoProps {
  logo: string;
  name: string;
}

export default function PartnerLogo({ logo, name }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt={name} className="h-12" />
    </div>
  );
}