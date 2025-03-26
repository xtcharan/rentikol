import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  treatmentType: string;
  propertyType: string;
}

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  treatmentType: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post('/api/quote-request', async (req, res) => {
    try {
      const quoteData: QuoteRequest = req.body;
      
      // Validate data
      if (!quoteData.name || !quoteData.email || !quoteData.phone || 
          !quoteData.suburb || !quoteData.treatmentType || !quoteData.propertyType) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, you'd store this in a database
      // For this demo, we'll just return a success response
      console.log('Quote request received:', quoteData);
      
      res.status(200).json({ 
        success: true, 
        message: 'Quote request received successfully' 
      });
    } catch (error) {
      console.error('Error processing quote request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error processing your request' 
      });
    }
  });

  app.post('/api/book-service', async (req, res) => {
    try {
      const bookingData: BookingRequest = req.body;
      
      // Validate data
      if (!bookingData.name || !bookingData.email || !bookingData.phone || 
          !bookingData.suburb || !bookingData.treatmentType) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, you'd store this in a database
      // For this demo, we'll just return a success response
      console.log('Booking request received:', bookingData);
      
      res.status(200).json({ 
        success: true, 
        message: 'Booking request received successfully' 
      });
    } catch (error) {
      console.error('Error processing booking request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error processing your request' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
