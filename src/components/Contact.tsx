
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const apiBase = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(`${apiBase}/api/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'ramzi796@gmail.com',
          phone: '1234567890'
        })
      });
    } catch (error) {
      toast.error(`Submission failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
      toast.success("Thank you for reaching out! We'll contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <section id="contact" className="section bg-compass-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Leave your contact details below and we will call you right back.
          </p>
          <div className="w-20 h-1 bg-compass-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1">
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold mb-6 text-compass-700">Contact Information</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          className="border-compass-200 focus-visible:ring-compass-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="border-compass-200 focus-visible:ring-compass-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+91 9123456789" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="border-compass-200 focus-visible:ring-compass-500"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-compass-600 hover:bg-compass-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Contact Info"}
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
