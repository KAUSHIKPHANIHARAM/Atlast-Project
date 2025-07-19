import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Let's <span className="text-primary">Connect</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-lg font-semibold text-foreground">+91 99595 86681</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="text-lg font-semibold text-foreground">connect@atlastmotogen.one</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/atlast.rev" 
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/atlast/" 
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-3xl border border-border shadow-card animate-slide-in-right">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">ASK</h3>
              <p className="text-lg text-foreground">
                <span className="text-primary">Always</span> <span className="text-primary">Seek</span> knowledge
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Enter your email"
                  type="email"
                  className="bg-muted border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Enter your name"
                  className="bg-muted border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Type your message here"
                  rows={4}
                  className="bg-muted border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 py-6 text-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;