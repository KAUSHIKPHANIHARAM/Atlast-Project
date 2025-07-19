import { Atom, Lightbulb, Rocket } from "lucide-react";

const HowSection = () => {
  return (
    <section id="how" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            How We <span className="text-primary">Innovate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our three core pillars drive revolutionary change in sustainable mobility
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Clean-Tech Pillar */}
          <div className="group bg-gradient-card p-8 rounded-3xl border border-border shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <Atom className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Clean-Tech</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">
                Powered by Green Hydrogen
              </p>
              <p className="text-muted-foreground">
                Net-zero emissions. Infinite possibilities
              </p>
              <div className="pt-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Zero Carbon Footprint</p>
              </div>
            </div>
          </div>

          {/* Relentless Innovation Pillar */}
          <div className="group bg-gradient-card p-8 rounded-3xl border border-border shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Relentless Innovation</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">
                Engineered to defy limits
              </p>
              <p className="text-muted-foreground">
                Designed from Nature. Effortless & thrilling experience
              </p>
              <div className="pt-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-5/6 animate-pulse"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Bio-Inspired Engineering</p>
              </div>
            </div>
          </div>

          {/* Bold Energy Pillar */}
          <div className="group bg-gradient-card p-8 rounded-3xl border border-border shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Bold Energy</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">
                Young minds. Fresh perspectives
              </p>
              <p className="text-muted-foreground">
                Fearless thinking & Fueled by purpose
              </p>
              <div className="pt-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Purpose-Driven Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;