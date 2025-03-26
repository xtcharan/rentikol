export default function CompanyHistory() {
  const columns = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      label: "Residential Pest Control",
      description: "Protecting your home from unwanted pests is important and costs less than you might think! Choose our Premium Plans. Because all homes are different, our expert technicians will tailor a pest protection program to suit your specific needs. Regular pest treatments ensure your property remains consistently pest-free year-round and helps safeguard your biggest asset.",
      link: "residential pest control"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545071549-f2f2d6d7a111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      label: "Commercial Pest Control",
      description: "From mining centres, central districts and flying centres to sophisticated hotels and venues and city restaurants – our technicians understand the complexities of the hospitality sector and work to eliminate the threats from pests to protect your commercial services, use the latest technology and integrated pest management.",
      link: "commercial pest control"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1626458712168-124ef936288f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      label: "Termite Protection",
      description: "Despite their size, termites are by far the most damaging pests in Australia and cause more than $1.5 billion of damage to homes each year. Termite activity can take place for months or even years before being discovered, potentially causing serious structural damage to your most important investment costing up to $30,000 or more to repair.",
      link: "termite control"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-heading">Australia's Pest Control Leaders</h2>
          <p className="text-gray-600">Staying At The Forefront Of Pest Control For Over 105 Years!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column) => (
            <div key={column.id} className="bg-white rounded-lg shadow p-4">
              <div className="relative h-48 mb-4 overflow-hidden rounded">
                <img 
                  src={column.image}
                  alt={column.label} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-flickBlue-dark text-white px-3 py-1 text-sm">
                  {column.label}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{column.description}</p>
              <div className="mt-4">
                <a href="#" className="text-flickBlue hover:text-flickBlue-dark text-sm font-semibold">
                  Learn more about {column.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
