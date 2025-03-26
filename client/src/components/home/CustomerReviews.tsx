import { useState } from 'react';

export default function CustomerReviews() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Max's service exceeded our expectations. He was incredibly knowledgeable and took the time to explain all aspects of the procedure. I wouldn't hesitate to recommend him.",
      author: "Rick S.",
      initial: "R",
      color: "bg-flickRed"
    },
    {
      id: 2,
      text: "The service is very professional. Danny is the person who came to my home to do work. Very nice person.",
      author: "Oscar T.",
      initial: "O",
      color: "bg-orange-500"
    },
    {
      id: 3,
      text: "Both Ryan and Paul were very professional and great at what they do. I'd definitely recommend them again for routine termite inspection.",
      author: "Peter M.",
      initial: "P",
      color: "bg-blue-500"
    }
  ];

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-heading">Customer Reviews on Google</h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="mr-4">
              <p className="font-bold text-gray-800">Flick Pest Control</p>
              <div className="flex">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 mb-4 text-sm">{review.text}</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <div className="flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-flickBlue' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
