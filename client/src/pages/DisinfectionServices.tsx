import { Link } from 'wouter';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/disinfection/ServiceCard';
import BenefitCard from '@/components/disinfection/BenefitCard';
import SectorCard from '@/components/disinfection/SectorCard';
import PartnerLogo from '@/components/disinfection/PartnerLogo';
import Testimonial from '@/components/disinfection/Testimonial';

export default function DisinfectionServices() {
  // Data from the reference images
  const services = [
    {
      id: 1,
      title: "Pest control services",
      description: "Whether residential or commercial, we create tailored solutions to meet your pest control needs with systematic treatments and expert advice.",
      buttonText: "Find out more"
    },
    {
      id: 2,
      title: "Digital pest control",
      description: "A range of innovative digital solutions with state-of-the-art technology provides continuous monitoring and protection against pests.",
      buttonText: "Find out more"
    },
    {
      id: 3,
      title: "Lumnia Insect Light",
      description: "Revolutionary technology for protection against flying insects, utilizing UV-LED technology for efficient, discreet, and power-saving solutions.",
      buttonText: "Find out more"
    }
  ];

  const industrySectors = [
    { id: 1, name: "Manufacturing", icon: "factory" },
    { id: 2, name: "Healthcare", icon: "healthcare" },
    { id: 3, name: "Offices", icon: "office" },
    { id: 4, name: "Retail", icon: "retail" },
    { id: 5, name: "Education", icon: "education" },
    { id: 6, name: "View all sectors", icon: "plus" }
  ];

  const benefits = [
    {
      id: 1,
      icon: "check",
      title: "Peace of mind",
      description: "Our comprehensive disinfection services provide high-level protection against harmful bacteria, viruses, and pathogens."
    },
    {
      id: 2,
      icon: "check",
      title: "Leading-edge equipment and training",
      description: "Our technicians use the most advanced tools and techniques, backed by extensive training in sanitization protocols."
    },
    {
      id: 3,
      icon: "check",
      title: "Tailored solutions",
      description: "From complete facility disinfection to targeted high-traffic areas, we customize our approach to your specific needs."
    }
  ];

  const partners = [
    { id: 1, name: "BPCA", logo: "https://via.placeholder.com/120x40?text=BPCA" },
    { id: 2, name: "CEPA", logo: "https://via.placeholder.com/120x40?text=CEPA" },
    { id: 3, name: "NPMA", logo: "https://via.placeholder.com/120x40?text=NPMA" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Based on first reference image */}
        <section className="relative bg-gray-900 h-[300px] md:h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Disinfection services professional" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-2xl md:text-3xl text-white font-normal mb-6">
                The global experts in pest control
              </h1>
              <button className="bg-red-600 border border-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm font-normal">
                Contact your local specialist
              </button>
            </div>
          </div>
        </section>
        
        {/* Company Introduction */}
        <section className="bg-white py-6">
          <div className="container mx-auto px-4">
            <p className="text-gray-700 text-sm text-center max-w-4xl mx-auto">
              Rentokil is the world's largest pest control company, offering the broadest, most advanced range of pest control solutions and services in the industry.
            </p>
          </div>
        </section>
        
        {/* Services Showcase - Matches the three white cards with red titles in reference image */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section - Match the 3 icon cards with red check marks */}
        <section className="bg-gray-50 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
              Empowering organizations with global pest control expertise
            </h2>
            <p className="text-gray-600 text-sm text-center mb-8 max-w-3xl mx-auto">
              Whether for home treatment or business facility, our expert technicians deliver comprehensive solutions backed by industry-leading technology and a global network of expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
              {benefits.map(benefit => (
                <BenefitCard 
                  key={benefit.id} 
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            
            <div className="text-center">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 text-sm">
                Find out more
              </button>
            </div>
          </div>
        </section>
        
        {/* Industry Sectors - Matches the 6 icon boxes in reference image */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">
              Global leaders in tailored pest control services
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
              {industrySectors.map(sector => (
                <SectorCard 
                  key={sector.id} 
                  icon={sector.icon} 
                  name={sector.name} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* International Affiliations - Matches the partner logos section in reference image */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
              International affiliations and partnerships
            </h2>
            <p className="text-gray-600 text-xs text-center mb-6 max-w-3xl mx-auto">
              As part of our global commitment to excellence, we maintain partnerships with leading organizations in pest control, health, and environmental protection.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {partners.map(partner => (
                <PartnerLogo 
                  key={partner.id} 
                  logo={partner.logo} 
                  name={partner.name} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial - Matches the quote section in reference image */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Testimonial 
                quote="Flick's comprehensive disinfection service provided us with a safer workplace during the pandemic. Their attention to detail and thorough approach gave us peace of mind that our facility was properly sanitized."
                author="Jane Peterson"
                position="Head of Facilities"
                company="Coastal Industries"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}