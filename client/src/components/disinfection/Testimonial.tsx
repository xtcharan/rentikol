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
    <div className="bg-white p-6 border-l-4 border-red-500">
      <div className="text-red-500 mb-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="text-gray-700 text-sm mb-4">
        {quote}
      </blockquote>
      <div className="font-medium text-gray-900 text-sm">
        {authorInfo}
      </div>
    </div>
  );
}