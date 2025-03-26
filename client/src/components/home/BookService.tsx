import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function BookService() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    treatmentType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await apiRequest('POST', '/api/book-service', formData);
      
      toast({
        title: "Success!",
        description: "Your booking request has been submitted. We'll contact you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        treatmentType: ''
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="bg-flickGreen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center font-heading">Book A Service Now</h2>
        <p className="text-white text-center mb-8">Book us for an inspection today and safeguard your home!</p>
        
        <form 
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border-0"
              required
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border-0"
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              placeholder="Phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border-0"
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Suburb" 
              name="suburb"
              value={formData.suburb}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border-0"
              required
            />
          </div>
          <div>
            <select 
              className="w-full px-4 py-3 rounded-md border-0 bg-white"
              name="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Treatment Type</option>
              <option>Residential Pest</option>
              <option>Commercial Pest</option>
              <option>Termite Inspection</option>
              <option>Washroom Hygiene</option>
            </select>
          </div>
          <div className="md:col-span-2 text-center">
            <button 
              type="submit" 
              className="bg-white text-flickGreen hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition duration-300"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
