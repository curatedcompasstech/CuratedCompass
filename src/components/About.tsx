
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-travel-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" 
                alt="Curated Compass Team" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg italic text-gray-600">
                "Our mission is to transform travel into a deeply personal and transformative experience."
              </p>
              <p className="mt-2 font-medium text-travel-700">- Curated Compass Team</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Curated Compass</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              At Curated Compass, we believe travel should be more than just visiting places – it should be about creating profound connections and unforgettable experiences that stay with you forever.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Founded by a team of passionate travelers and industry experts, we combine deep local knowledge with premium service to craft journeys that reflect your unique interests and aspirations.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Each itinerary we create is thoughtfully designed to immerse you in authentic culture, introduce you to hidden gems, and provide the perfect balance of adventure and relaxation.
            </p>
            
            <Button className="bg-travel-600 hover:bg-travel-700">
              Learn More About Us
            </Button>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Curated Compass</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-3xl font-bold text-compass-600">15+</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Years Experience</h4>
              <p className="text-gray-600">Trusted expertise in crafting exceptional journeys.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-3xl font-bold text-compass-600">50+</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Destinations</h4>
              <p className="text-gray-600">Specialized knowledge of diverse global locations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-3xl font-bold text-compass-600">100%</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Tailor-Made</h4>
              <p className="text-gray-600">Every journey customized to your preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-3xl font-bold text-compass-600">24/7</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Support</h4>
              <p className="text-gray-600">Assistance available throughout your journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
