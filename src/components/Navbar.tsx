
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a nav item
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/4afca358-cd94-423d-9b93-4ea302fd808d.png" 
            alt="Curated Compass Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-compass-600 transition-colors">
            Home
          </Link>
          <button 
            onClick={() => handleNavClick('services')} 
            className="font-medium hover:text-compass-600 transition-colors bg-transparent"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('destinations')} 
            className="font-medium hover:text-compass-600 transition-colors bg-transparent"
          >
            Destinations
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="font-medium hover:text-compass-600 transition-colors bg-transparent"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="font-medium hover:text-compass-600 transition-colors bg-transparent"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-in-right">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="px-6 py-3 font-medium hover:bg-compass-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => handleNavClick('services')}
              className="px-6 py-3 font-medium hover:bg-compass-50 text-left"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('destinations')}
              className="px-6 py-3 font-medium hover:bg-compass-50 text-left"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="px-6 py-3 font-medium hover:bg-compass-50 text-left"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 font-medium hover:bg-compass-50 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
