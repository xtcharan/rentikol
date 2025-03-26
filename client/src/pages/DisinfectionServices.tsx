import { Link } from 'wouter';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/disinfection/ServiceCard';
import BenefitCard from '@/components/disinfection/BenefitCard';
import SectorCard from '@/components/disinfection/SectorCard';
import PartnerLogo from '@/components/disinfection/PartnerLogo';
import Testimonial from '@/components/disinfection/Testimonial';

export default function DisinfectionServices() {
  const services = [
    {
      id: 1,
      title: "Pest control services",
      description: "Whether residential or commercial, we create tailored solutions to meet your pest control needs with systematic treatments and expert advice.",
      imageUrl: "https://images.unsplash.com/photo-1584351795875-71bae3d4748f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 2,
      title: "Digital pest control",
      description: "A range of innovative digital solutions with state-of-the-art technology provides continuous monitoring and protection against pests.",
      imageUrl: "https://images.unsplash.com/photo-1584698919411-65a60f474beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      title: "Lumnia Insect Light",
      description: "Revolutionary technology for protection against flying insects, utilizing UV-LED technology for efficient, discreet, and power-saving solutions.",
      imageUrl: "https://images.unsplash.com/photo-1612914082716-7475374517ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  const industrySectors = [
    { id: 1, name: "Manufacturing", icon: "🏭" },
    { id: 2, name: "Healthcare", icon: "🏥" },
    { id: 3, name: "Offices", icon: "🏢" },
    { id: 4, name: "Retail", icon: "🛒" },
    { id: 5, name: "Education", icon: "🎓" },
    { id: 6, name: "View all sectors", icon: "➕" }
  ];

  const benefits = [
    {
      id: 1,
      icon: "✓",
      title: "Peace of mind",
      description: "Our comprehensive disinfection services provide high-level protection against harmful bacteria, viruses, and pathogens."
    },
    {
      id: 2,
      icon: "✓",
      title: "Leading-edge equipment and training",
      description: "Our technicians use the most advanced tools and techniques, backed by extensive training in sanitization protocols."
    },
    {
      id: 3,
      icon: "✓",
      title: "Tailored solutions",
      description: "From complete facility disinfection to targeted high-traffic areas, we customize our approach to your specific needs."
    }
  ];

  const partners = [
    { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/120x60" },
    { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/120x60" },
    { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/120x60" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 h-[500px]">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Disinfection services professional" 
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-flickBlue-dark/60"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
                The global experts in pest control and disinfection
              </h1>
              <button className="mt-4 bg-white text-flickBlue-dark hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition duration-300">
                Contact your local specialist
              </button>
            </div>
          </div>
        </section>
        
        {/* Company Introduction */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-700 max-w-4xl mx-auto">
              Flick is the world's largest pest control company, offering the broadest, most advanced range of pest control solutions and services in the industry.
            </p>
          </div>
        </section>
        
        {/* Services Showcase */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-heading">
              Empowering organizations with global pest control expertise
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Whether for home treatment or business facility, our expert technicians deliver comprehensive solutions backed by industry-leading technology and a global network of expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {benefits.map(benefit => (
                <BenefitCard 
                  key={benefit.id} 
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            
            <button className="bg-flickBlue text-white hover:bg-flickBlue-dark px-6 py-3 rounded-md font-semibold transition duration-300">
              Find out more
            </button>
          </div>
        </section>
        
        {/* Industry Sectors */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-heading">
              Global leaders in tailored pest control services
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
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
        
        {/* International Affiliations */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 font-heading">
              International affiliations and partnerships
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              As part of our global commitment to excellence, we maintain partnerships with leading organizations in pest control, health, and environmental protection.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
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
        
        {/* Testimonial */}
        <section className="bg-white py-16">
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