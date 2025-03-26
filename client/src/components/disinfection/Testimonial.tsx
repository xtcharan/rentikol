interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
}

export default function Testimonial({ quote, author, position, company }: TestimonialProps) {
  const authorInfo = position && company 
    ? `${author}, ${position}, ${company}`
    : author;
    
  return (
    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-flickRed">
      <blockquote className="text-gray-700 italic mb-4">
        "{quote}"
      </blockquote>
      <div className="font-medium text-gray-900">
        — {authorInfo}
      </div>
    </div>
  );
}