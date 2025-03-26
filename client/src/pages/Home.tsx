import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CompanyHistory from '@/components/home/CompanyHistory';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import CustomerReviews from '@/components/home/CustomerReviews';
import PestSolutions from '@/components/home/PestSolutions';
import BookService from '@/components/home/BookService';

export default function Home() {
  const [showChatButton, setShowChatButton] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Main Tagline */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-flickBlue-dark mb-4 font-heading">
              GIVE PESTS 'THE FLICK' WITH OUR TERMITE, RESIDENTIAL & COMMERCIAL PEST CONTROL SERVICES
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              From your private home to a warehouse complex we keep your home and business free from pests. A family-run and owned business with generations of experience, Flick has the expertise and knowledge to adapt our unequalled treatment solutions for residential and commercial premises alike. From elimination of termites, ants, cockroaches, spiders, fleas, bed bugs and flying insects, to bird and rodent management, Flick's technicians are professionally equipped to overcome any existing pest control issue and prevent future problems.
            </p>
          </div>
        </section>
        
        <ServicesSection />
        <CompanyHistory />
        <IndustrySolutions />
        <CustomerReviews />
        <PestSolutions />
        <BookService />
      </main>

      <Footer />
      
      {/* Support Chat Button */}
      {showChatButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            className="bg-flickGreen hover:bg-flickGreen-dark text-white font-bold py-3 px-4 rounded-md shadow-lg flex items-center transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-comments mr-2"></i>
            <span>CHAT WITH US</span>
          </button>
        </div>
      )}
    </div>
  );
}
