import { Heart, Leaf, Zap } from "lucide-react";

const WhySection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            Why <span className="text-primary">ATLAST</span>?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-primary mr-4" />
              <Leaf className="w-12 h-12 text-primary mx-4" />
              <Zap className="w-12 h-12 text-primary ml-4" />
            </div>
            
            <p className="text-2xl md:text-3xl text-primary font-semibold leading-relaxed">
              We believe LIFE is the rarest miracle - Evolution demands courage to protect it.
            </p>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              At ATLAST, we're not just building machines. We are building a future where life breathes cleaner, moves smarter, and lasts longer!
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Life First</h3>
            <p className="text-muted-foreground">
              Every innovation starts with respect for life and our planet's precious ecosystems.
            </p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Clean Future</h3>
            <p className="text-muted-foreground">
              Building sustainable mobility solutions that protect our environment for generations.
            </p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Smart Innovation</h3>
            <p className="text-muted-foreground">
              Pioneering technology that makes transportation more intelligent and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;