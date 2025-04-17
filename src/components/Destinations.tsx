import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const destinations = [
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    description: "Iconic white-washed buildings with stunning Aegean Sea views.",
  },
  {
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    description: "Ancient temples, beautiful gardens and traditional culture.",
  },
  {
    name: "Amalfi Coast, Italy",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    description: "Dramatic coastline with colorful villages perched on cliffs.",
  },
  {
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    description: "Mysterious ancient Incan city nestled in breathtaking mountains.",
  },
];

const Destinations = () => {
  const [showAll, setShowAll] = useState(false);
  
  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAll(true);
    // Keep user at current scroll position
  };

  return (
    <section id="destinations" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after destinations, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-scale"
            >
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-700">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleViewAll}
            className="text-compass-600 font-medium hover:text-compass-800 underline underline-offset-4"
          >
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
