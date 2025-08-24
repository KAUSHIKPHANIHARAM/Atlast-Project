import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, Linkedin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateId = "template_89oei0f";
    const publicKey = "pS9kAiGT4N11LqL1q"
    const serviceId = "";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "",
      message: formData.message
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }).catch(() => {
        toast({
          title: "Something went wrong",
          description: "Failed to send your message. Try again later.",
        });
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <style>{`
        /* Ensure social SVGs keep brand hover colors and turn white for contrast */
        a[aria-label="Instagram"]:hover svg, a[aria-label="LinkedIn"]:hover svg { color: white !important; }
      `}</style>
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
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 group hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:bg-gradient-to-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-foreground transition-transform group-hover:scale-110 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/atlast-official/"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 group hover:bg-[#0077B5]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-foreground transition-transform group-hover:scale-110 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-3xl border border-border shadow-card animate-slide-in-right text-center">
            <div className="mb-6">
              {/* <p className="text-sm text-foreground mb-1">Lets Connect</p> */}
              <h3 className="text-5xl font-extrabold text-primary mb-2 tracking-wide">ASK</h3>
              <p className="text-lg text-foreground">
                <span className="text-foreground">Always</span> <span className="text-primary">
                  <Typewriter
                    words={['Seek', 'Share']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span> knowledge
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-muted border-border focus:border-primary transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  type="email"
                  className="bg-muted border-border focus:border-primary transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Textarea
                  id="message"
                  required
                  name="message"
                  placeholder="Type your message here"
                  rows={4}
                  className="bg-muted border-border focus:border-primary transition-colors resize-none"
                  value={formData.message}  
                  onChange={handleChange}  
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;