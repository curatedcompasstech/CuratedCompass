/**
 * This file represents a client for the Backend For Frontend (BFF) 
 * that would be implemented in NestJS as per the requirements.
 * 
 * In a real implementation, this would make API calls to your NestJS backend.
 * For now, we'll simulate the API responses.
 */

// Types for our data models
export interface ServiceType {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Destination {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    price: number;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  // Simulated API client
  export const apiClient = {
    // Get all services
    getServices: async (): Promise<ServiceType[]> => {
      // In a real app, this would be: return await fetch('/api/services').then(res => res.json());
      return Promise.resolve([
        {
          id: '1',
          title: 'Personalized Itineraries',
          description: 'Custom travel plans crafted by experts to match your interests, pace, and style.',
          icon: 'Compass',
        },
        // ... other services would be returned by the API
      ]);
    },
    
    // Get featured destinations
    getDestinations: async (): Promise<Destination[]> => {
      // In a real app, this would be: return await fetch('/api/destinations').then(res => res.json());
      return Promise.resolve([
        {
          id: '1',
          name: 'Santorini, Greece',
          description: 'Iconic white-washed buildings with stunning Aegean Sea views.',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
          rating: 4.9,
          price: 1299,
        },
        // ... other destinations would be returned by the API
      ]);
    },
    
    // Submit contact form
    submitContactForm: async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
      // In a real app, this would be:
      // return await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // }).then(res => res.json());
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Thank you for reaching out! We will get back to you shortly.',
          });
        }, 1000);
      });
    },
  };
  