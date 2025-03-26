import { useState } from 'react';
import { Link } from 'wouter';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-flickBlue-dark text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="hidden md:block">
            <span>✰✰✰✰✰ 5.0 Google Rating | Pest Professionals</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">LOCAL OFFICES</a>
            <a href="#" className="hover:underline">CONTACT US</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="text-flickRed font-heading font-bold text-2xl">
                <span className="bg-flickRed text-white px-3 py-1 rounded">Flick</span>
                <span className="text-flickRed">Pest Control</span>
              </div>
            </Link>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <div className="text-flickBlue-dark font-semibold">
              <i className="fas fa-phone-alt mr-2"></i>
              CALL US NOW: 1300 841 994
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-t border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex">
              {/* Main Navigation Items */}
              <div className="hidden md:flex items-center space-x-1">
                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-home mr-2"></i> RESIDENTIAL
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div className="dropdown-menu absolute hidden bg-white min-w-max shadow-md z-10 py-2 rounded">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pest Control</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Termite Control</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Protection Plans</a>
                  </div>
                </div>

                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-building mr-2"></i> COMMERCIAL
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div className="dropdown-menu absolute hidden bg-white min-w-max shadow-md z-10 py-2 rounded">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial Pest Control</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Industry Solutions</a>
                  </div>
                </div>

                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-shield-alt mr-2"></i> TERMITE PROTECTION
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div className="dropdown-menu absolute hidden bg-white min-w-max shadow-md z-10 py-2 rounded">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Termite Inspections</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Termite Treatments</a>
                  </div>
                </div>

                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-bug mr-2"></i> PEST INFORMATION
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div className="dropdown-menu absolute hidden bg-white min-w-max shadow-md z-10 py-2 rounded">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pest Library</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pest Tips</a>
                  </div>
                </div>

                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-spray-can mr-2"></i> DISINFECTION SERVICES
                  </a>
                </div>

                <div className="relative group">
                  <a href="#" className="px-3 py-4 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                    <i className="fas fa-info-circle mr-2"></i> ABOUT US
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div className="dropdown-menu absolute hidden bg-white min-w-max shadow-md z-10 py-2 rounded">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                className="outline-none"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-bars text-gray-700 text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-home mr-2"></i> RESIDENTIAL
                </a>
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-building mr-2"></i> COMMERCIAL
                </a>
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-shield-alt mr-2"></i> TERMITE PROTECTION
                </a>
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-bug mr-2"></i> PEST INFORMATION
                </a>
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-spray-can mr-2"></i> DISINFECTION SERVICES
                </a>
                <a href="#" className="px-3 py-2 text-gray-700 hover:text-flickBlue flex items-center transition duration-150 ease-in-out">
                  <i className="fas fa-info-circle mr-2"></i> ABOUT US
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
