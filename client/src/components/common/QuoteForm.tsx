import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function QuoteForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    treatmentType: '',
    propertyType: ''
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
      await apiRequest('POST', '/api/quote-request', formData);
      
      toast({
        title: "Quote Requested",
        description: "Thank you! Your quote request has been submitted. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        treatmentType: '',
        propertyType: ''
      });
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue"
          required
        />
      </div>
      <div className="mb-4">
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue"
          required
        />
      </div>
      <div className="mb-4">
        <input 
          type="tel" 
          placeholder="Phone" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue"
          required
        />
      </div>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Suburb" 
          name="suburb"
          value={formData.suburb}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue"
          required
        />
      </div>
      <div className="mb-4">
        <select 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue bg-white"
          name="treatmentType"
          value={formData.treatmentType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Treatment Type</option>
          <option>Pest Control</option>
          <option>Termite Inspection</option>
          <option>Commercial Pest Control</option>
        </select>
      </div>
      <div className="mb-4">
        <select 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flickBlue bg-white"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Property Type</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="w-full bg-flickRed hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
      >
        Get Quote
      </button>
    </form>
  );
}
