export default function Footer() {
  return (
    <footer className="bg-flickBlue-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">1300 841 994</a></li>
              <li><a href="#" className="hover:underline">Contact Form</a></li>
              <li><a href="#" className="hover:underline">Find Your Local Office</a></li>
              <li><a href="#" className="hover:underline">Request a Quote</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">WHAT WE DO</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Residential Pest Control</a></li>
              <li><a href="#" className="hover:underline">Commercial Pest Control</a></li>
              <li><a href="#" className="hover:underline">Termite Protection</a></li>
              <li><a href="#" className="hover:underline">Hygiene Services</a></li>
              <li><a href="#" className="hover:underline">Pest Library</a></li>
              <li><a href="#" className="hover:underline">Disinfection Services</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">UPDATES & RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Pest Prevention</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">ABOUT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Flick</a></li>
              <li><a href="#" className="hover:underline">Our People</a></li>
              <li><a href="#" className="hover:underline">Our Brands</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 font-heading">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-flickGreen"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white hover:text-flickGreen"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white hover:text-flickGreen"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white hover:text-flickGreen"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700 text-sm text-blue-300 text-center">
          <p>© {new Date().getFullYear()} Flick Anticimex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
