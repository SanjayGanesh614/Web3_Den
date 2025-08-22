import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = roadmapRef.current?.querySelectorAll('.roadmap-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const roadmapItems = [
    {
      phase: "PHASE 01",
      title: "FOUNDATION",
      status: "COMPLETED",
      description: "Platform infrastructure, smart contracts deployment, and initial game prototypes.",
      features: ["Core Platform Launch", "NFT Marketplace", "Wallet Integration", "Community Building"]
    },
    {
      phase: "PHASE 02", 
      title: "EXPANSION",
      status: "IN PROGRESS",
      description: "Multi-chain integration, advanced gaming features, and strategic partnerships.",
      features: ["Cross-Chain Support", "Advanced Guilds", "Tournament System", "Mobile App Beta"]
    },
    {
      phase: "PHASE 03",
      title: "EVOLUTION",
      status: "Q2 2024",
      description: "Metaverse integration, AI-powered NPCs, and decentralized governance implementation.",
      features: ["Metaverse Portal", "AI Game Masters", "DAO Governance", "VR Integration"]
    },
    {
      phase: "PHASE 04",
      title: "TRANSCENDENCE", 
      status: "Q4 2024",
      description: "Full ecosystem maturity with interoperable assets and limitless gaming possibilities.",
      features: ["Universal Assets", "Quantum Gaming", "Reality Bridge", "Infinite Worlds"]
    }
  ];

  return (
    <section className="py-20 space-background" ref={roadmapRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            ROADMAP TO THE FUTURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey through the digital cosmos, unlocking new dimensions of gaming excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`roadmap-item mb-16 ${
                  index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'
                }`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="glass-morphism cyber-shadow smooth-transition hover:scale-105">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-accent">
                              {item.phase}
                            </span>
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              item.status === 'COMPLETED' 
                                ? 'bg-green-500/20 text-green-400' 
                                : item.status === 'IN PROGRESS'
                                ? 'bg-primary/20 text-primary'
                                : 'bg-muted/20 text-muted-foreground'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gradient-primary mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center text-sm"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow-pulse"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full gaming-glow animate-glow-pulse border-4 border-background">
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 scroll-fade-in">
          <Card className="glass-morphism cyber-shadow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                Ready to Shape the Future?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community of visionary gamers and builders. Together, we'll redefine 
                what's possible in the Web3 gaming universe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gaming-glow smooth-transition">
                  Join Community
                </button>
                <button className="px-6 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg smooth-transition">
                  View Documentation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;