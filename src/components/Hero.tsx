import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CTAModal from "./CTAModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main content */}
        <div className="animate-fade-in">
          <div className="mb-8">
<h1 className="text-4xl md:text-8xl font-bold mb-2 text-gradient-primary">
              WELCOME
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-2 text-gradient-accent">
              TO THE
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-gradient-primary mb-8">
              WEB3 DEN
            </h3>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Web3 Den—where you own your data, explore decentralization, and step into the future of the internet. Join us in building a more open, secure, and user-centric digital world.
            The website is Under Development. Stay Tuned for Updates!
          </p>

          {/* Call to action button */}
          <div className="scroll-fade-in">
            <button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 hover:scale-105 text-2xl text-gradient-foreground rounded-lg gaming-glow smooth-transition"
              onClick={() => setIsModalOpen(true)}
            >
            Connect with us
            </button>
          </div>
          <CTAModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
