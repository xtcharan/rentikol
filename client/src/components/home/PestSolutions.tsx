import { useState } from 'react';

export default function PestSolutions() {
  const [activePest, setActivePest] = useState('Bed Bugs');

  const pests = [
    { id: 1, name: 'Bed Bugs' },
    { id: 2, name: 'Rat Control' },
    { id: 3, name: 'Bird Control' },
    { id: 4, name: 'Flies and Tick Solutions' },
    { id: 5, name: 'Flying Insect Controls' }
  ];

  const pestContent = {
    'Bed Bugs': {
      title: 'BED BUG PEST CONTROL',
      content: [
        "Have you been fighting those pesky bed bugs? Those little bugs are a nuisance for all of us. Bed bugs are notoriously difficult to eliminate on your own, because of their size, rapid reproduction and ability to survive for a year or more without food. An experienced professional pest controller is required to exterminate bed bugs.",
        "At Flick, our professional bed bug control service provides a thorough inspection of your home with a detailed treatment plan to eliminate the bed bugs from your home. The service of Flick technicians is carried on through follow-up visits to be sure that the unwanted pests are gone from your home. Combined with your involvement and elimination of clutter around your home, the elimination of these troubles is carried on through sanitization of the area and proper disposal of your mattresses and the prevention of future troubles."
      ]
    },
    'Rat Control': {
      title: 'RAT CONTROL SERVICES',
      content: [
        "Rats are not only a nuisance but also pose health risks to your family and can cause significant damage to your property. Our professional rat control services eliminate existing infestations and prevent future problems.",
        "Our technicians use a combination of baiting systems, traps, and exclusion techniques to effectively control rat populations. We also provide advice on how to make your property less attractive to rodents, including proper food storage and waste management practices."
      ]
    },
    'Bird Control': {
      title: 'BIRD CONTROL SOLUTIONS',
      content: [
        "Birds can create mess, noise, and health hazards around your property. Our bird control solutions are humane and effective, designed to discourage birds from roosting and nesting in unwanted areas.",
        "We offer a range of bird deterrent systems including physical barriers, visual deterrents, and sonic devices that make your property less attractive to problem birds. Our solutions are tailored to your specific situation and the type of birds causing issues."
      ]
    },
    'Flies and Tick Solutions': {
      title: 'FLIES AND TICK CONTROL',
      content: [
        "Flies and ticks can transmit diseases and create unhygienic conditions in and around your home. Our comprehensive control programs target these pests at every stage of their lifecycle.",
        "For fly control, we identify and eliminate breeding sources while using targeted treatments for adult populations. Our tick control services include property inspections, vegetation management advice, and application of appropriate treatments to reduce tick populations."
      ]
    },
    'Flying Insect Controls': {
      title: 'FLYING INSECT CONTROL',
      content: [
        "Flying insects like mosquitoes, wasps, and moths can quickly become a major nuisance. Our flying insect control programs provide fast relief and long-term protection.",
        "We use a combination of habitat modification, exclusion techniques, and targeted treatments to control flying insect populations. Our technicians are trained to identify the specific insects affecting your property and implement the most effective control strategies."
      ]
    }
  };

  const handlePestClick = (pestName: string) => {
    setActivePest(pestName);
  };

  return (
    <section className="bg-flickBlue-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-heading">Learn More About Specific Pest Solutions</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Pest Menu */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-md overflow-hidden">
              {pests.map((pest) => (
                <button 
                  key={pest.id}
                  className={`w-full text-left px-4 py-3 ${pest.name === activePest 
                    ? 'bg-flickBlue text-white font-semibold' 
                    : 'text-gray-700 hover:bg-gray-100 border-b'}`}
                  onClick={() => handlePestClick(pest.name)}
                >
                  {pest.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Pest Content */}
          <div className="w-full md:w-3/4 bg-flickBlue rounded-md p-6">
            <h3 className="text-xl font-bold mb-4 font-heading">{pestContent[activePest as keyof typeof pestContent].title}</h3>
            {pestContent[activePest as keyof typeof pestContent].content.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            <a href="#" className="inline-block bg-flickGreen hover:bg-flickGreen-dark text-white font-semibold px-6 py-2 rounded-md transition duration-300 mt-2">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
