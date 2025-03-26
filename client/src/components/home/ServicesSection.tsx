export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Home Protection",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "For your family's health, our pest control services protect your home from unwanted pests. With our tailored residential pest control services and affordable Home Protection Plans, our specialist technicians provide year-round pest protection to ensure your living environments remain comfortable and safe.",
      buttonText: "Explore Now"
    },
    {
      id: 2,
      title: "24/7 Smart Digital Rodent Control",
      image: "https://images.unsplash.com/photo-1516362422724-84d299294a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "Our digital rodent monitoring is an industry-leading innovation that detects rodent activity in your premises 24/7. You don't need to be in evidence, and neither do our technicians. SMART Connect is the safe and easy way to keep your business and family protected from rodents, while maintaining regulatory compliance. SMART Technology keeps your mind at ease and your budget in control.",
      buttonText: "Find out more"
    },
    {
      id: 3,
      title: "Washroom & Hygiene Services",
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "Our commercial washroom range of essential products helps create a clean washroom environment and maintain the highest health and hygiene practices in high-traffic areas. Our range of products includes Sanitary Napkin Disposal service and Hand Soap dispensers to ensure hygiene is maintained. We create positive, welcoming spaces in commercial environments through our comprehensive washroom solutions.",
      buttonText: "Find out more"
    },
    {
      id: 4,
      title: "Powerful Disinfection Service",
      image: "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "Creating safer and healthier environments is our commitment. Our disinfection service effectively eliminates germs, bacteria and viruses from all types of surfaces. This award-winning cleaning and disinfection solution is capable of sanitizing all spaces using Flick's exclusive technique. This non-invasive disinfection is a safe, eco-friendly alternative that delivers results that long-lasting benefits resulting in a healthier space.",
      buttonText: "Find out more"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-heading">Flick's Unique Pest Control Services</h2>
          <p className="text-gray-600">Explore Our Services For Your Home or Business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-flickBlue p-1">
                <img 
                  src={service.image}
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold text-flickBlue-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              <a 
                href="#" 
                className="bg-flickBlue hover:bg-flickBlue-dark text-white font-semibold py-2 px-6 rounded-md transition duration-300 mt-auto"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
