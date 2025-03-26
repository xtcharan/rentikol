import QuoteForm from '@/components/common/QuoteForm';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="bg-gray-800 w-full h-[500px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Family standing in front of home" 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flickBlue-dark/70 to-flickBlue-dark/30"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Hero Content */}
            <div className="text-white max-w-lg mb-8 md:mb-0">
              <div className="bg-flickBlue-dark bg-opacity-80 p-6 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2">FLICK HOME PROTECTION PLANS</h1>
                <p className="text-lg mb-4">Effective & Affordable</p>
                <a href="#" className="inline-block bg-flickGreen hover:bg-flickGreen-dark text-white font-semibold px-6 py-2 rounded-md transition duration-300">LEARN MORE</a>
              </div>
            </div>
            
            {/* Quote Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="text-flickRed text-xl font-semibold text-center mb-4">GET YOUR FREE QUOTE*</h3>
              <p className="text-gray-500 text-sm text-center mb-4">* All fields required</p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
