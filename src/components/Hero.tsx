
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/background.png')`, height: '100vh', backgroundSize: 'cover' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      </div>

      {/* Hero content */}
      <div className="container-custom relative z-20 text-white pt-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full bg-travel-600/90 text-white text-sm font-medium mb-6">
            Your Personal Travel Concierge
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Your Perfect Journey with Expert Guidance
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Personalized travel experiences crafted by local experts. 
            Let us guide you to the destinations of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('destinations')}
              className="bg-compass-600 hover:bg-compass-700 text-white px-8 py-6 text-lg"
            >
              Explore Destinations
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg bg-compass-600/80 hover:bg-compass-600"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button 
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <ArrowDown className="mt-2 w-4 h-4" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
