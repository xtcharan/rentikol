export default function IndustrySolutions() {
  const industries = [
    { id: 1, name: "Education" },
    { id: 2, name: "Hospitality" },
    { id: 3, name: "Manufacturing & Logistics" },
    { id: 4, name: "Real Estate" },
    { id: 5, name: "Strata Property Management" }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-heading">Pest Control Solutions For Your Industry</h2>
          <p className="text-gray-600">Providing Effective And Sustainable Pest Control For Australian Businesses</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {industries.map(industry => (
            <a 
              key={industry.id}
              href="#" 
              className="bg-gray-200 hover:bg-flickBlue hover:text-white px-4 py-2 rounded-md text-gray-700 transition duration-300"
            >
              {industry.name}
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Find out more about <a href="#" className="text-flickBlue hover:underline">commercial pest control services for your industry</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
