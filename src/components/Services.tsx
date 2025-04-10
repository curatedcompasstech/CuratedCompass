
import { Compass, PlaneTakeoff, Building2, MapPin, Utensils, CloudSun } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Personalized Itineraries",
    description: "Custom travel plans crafted by experts to match your interests, pace, and style.",
    icon: <Compass className="h-10 w-10 text-compass-600" />,
  },
  {
    title: "Luxury Transportation",
    description: "Premium transportation options from private jets to chauffeur services.",
    icon: <PlaneTakeoff className="h-10 w-10 text-compass-600" />,
  },
  {
    title: "Handpicked Accommodations",
    description: "The finest hotels, villas, and unique stays, carefully selected for your comfort.",
    icon: <Building2 className="h-10 w-10 text-compass-600" />,
  },
  {
    title: "Private Guided Tours",
    description: "Expert local guides reveal hidden gems and authentic experiences.",
    icon: <MapPin className="h-10 w-10 text-compass-600" />,
  },
  {
    title: "Culinary Experiences",
    description: "Reservations at top restaurants and unique food experiences that define each destination.",
    icon: <Utensils className="h-10 w-10 text-compass-600" />,
  },
  {
    title: "24/7 Concierge Support",
    description: "Round-the-clock assistance to ensure a smooth and worry-free journey.",
    icon: <CloudSun className="h-10 w-10 text-compass-600" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-compass-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience travel like never before with our comprehensive suite of services
            designed to make your journey unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale border-compass-100">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-compass-700 p-0">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
