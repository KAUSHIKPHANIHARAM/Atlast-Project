import { Battery, Gauge, MapPin, Timer } from "lucide-react";

const WhatSection = () => {
  const specs = [
    {
      icon: MapPin,
      title: "Range",
      value: "250",
      unit: "km",
      description: "Extended journey capability"
    },
    {
      icon: Gauge,
      title: "Power",
      value: "20",
      unit: "kW",
      description: "High-performance output"
    },
    {
      icon: Battery,
      title: "Wheel Torque",
      value: "275",
      unit: "Nm",
      description: "Instant acceleration power"
    },
    {
      icon: Timer,
      title: "Refuel Time",
      value: "<1.5",
      unit: "min",
      description: "Swift refueling and endless wandering"
    }
  ];

  return (
    <section id="what" className="py-20 bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            What We <span className="text-primary">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary hydrogen cell-powered bikes engineered for the future of mobility
          </p>
        </div>

        {/* Product Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => (
            <div 
              key={spec.title}
              className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <spec.icon className="w-8 h-8 text-primary" />
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
              
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary">{spec.value}</span>
                <span className="text-lg text-muted-foreground ml-1">{spec.unit}</span>
              </div>
              
              <p className="text-sm text-muted-foreground">{spec.description}</p>
              
              {/* Progress indicator */}
              <div className="mt-4 w-full bg-muted rounded-full h-1">
                <div 
                  className="bg-gradient-primary h-1 rounded-full transition-all duration-1000 group-hover:w-full"
                  style={{ width: `${(index + 1) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gradient-card p-8 rounded-3xl border border-border shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            The Future of <span className="text-primary">Green Mobility</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Revolutionary Technology</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Hydrogen fuel cell propulsion
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Zero emission operation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Ultra-fast refueling technology
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Smart Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Intelligent power management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Connected mobility platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Bio-inspired design efficiency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;