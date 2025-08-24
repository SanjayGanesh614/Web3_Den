import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Phase1Modal from "./Phase1Modal";

interface RoadmapItem {
  phase: string;
  title: string;
  status: string;
  description: string;
  features: string[];
  locked?: boolean;
}

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [isPhase1ModalOpen, setIsPhase1ModalOpen] = useState(false);

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

  const roadmapItems: RoadmapItem[] = [
    {
      phase: "PHASE 01",
      title: "FOUNDATION",
      status: "IN PROGRESS",
      description: "Platform infrastructure, Smart Contracts Deployment.",
      features: ["Cyfrin Updraft Blockchain Basics Course", "Blockchain Fundamentals by Chainlink", "Solidity Basics"]
    },
    {
      phase: "PHASE 02", 
      title: "EXPANSION",
      status: "LOCKED",
      description: "",
      features: [],
      locked: true
    },
    {
      phase: "PHASE 03",
      title: "EVOLUTION",
      status: "LOCKED",
      description: "",
      features: [],
      locked: true
    },
    {
      phase: "PHASE 04",
      title: "TRANSCENDENCE", 
      status: "LOCKED",
      description: "",
      features: [],
      locked: true
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
            Master these future-ready skills—your ultimate roadmap to ace the CK interview and lead in the Web3 era.
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
                <div className={`flex flex-col md:flex-row items-center
        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 md:pr-8 md:pl-0 mb-8 md:mb-0">
                    <Card className="glass-morphism cyber-shadow smooth-transition hover:scale-105">
                      <CardContent className="p-4 md:p-6">
                        {item.locked ? (
                          <div className="text-center">
                            <div className="mb-4">
                              <span className="text-sm font-semibold text-accent">
                                {item.phase}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gradient-primary mb-6">
                              {item.title}
                            </h3>
                            <div className="flex justify-center mb-4">
                              <svg className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              Complete Phase 1 to unlock
                            </p>
                          </div>
                        ) : (
                          <>
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
                              <h3 className="text-xl md:text-2xl font-bold text-gradient-primary mb-3">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 text-sm md:text-base">
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
                            
                            {/* Phase 1 Expand Button */}
                            {item.phase === "PHASE 01" && (
                              <div className="mt-6">
                                <Button 
                                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gaming-glow"
                                  onClick={() => setIsPhase1ModalOpen(true)}
                                >
                                  Expand Details
                                </Button>
                              </div>
                            )}
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 w-full md:w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full gaming-glow animate-glow-pulse border-4 border-background">
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
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
                Join our Web3 community—where innovators, explorers, and future-builders connect, learn, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gaming-glow smooth-transition"
                onClick={() => window.open("https://instagram.com/barade_sanjay", "_blank")}>
                  Connect on Instagram
                </button>
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gaming-glow smooth-transition"
                onClick={() => window.open("https://roadmap.sh/blockchain", "_blank")}>
                  View Documentation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Phase 1 Modal */}
      <Phase1Modal 
        isOpen={isPhase1ModalOpen} 
        onClose={() => setIsPhase1ModalOpen(false)} 
      />
    </section>
  );
};

export default Roadmap;
