import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section className="py-20 space-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-morphism cyber-shadow smooth-transition hover:scale-105 scroll-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                    Visionary Builders
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We are a passionate team of blockchain developers, game designers, and digital artists 
                    united by a common vision: to revolutionize gaming through Web3 technology.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our expertise spans smart contract development, immersive game mechanics, 
                    NFT integration, and decentralized economy design. Together, we're building 
                    the next generation of gaming experiences.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Games Deployed</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-accent mb-2">100K+</div>
                      <div className="text-sm text-muted-foreground">Players Onboarded</div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Community Support</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-accent mb-2">∞</div>
                      <div className="text-sm text-muted-foreground">Innovation Drive</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-xl font-semibold mb-4 text-gradient-primary">Our Mission</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create an interconnected gaming metaverse where players truly own their digital assets, 
                  where skill is rewarded with real value, and where every game becomes part of a larger, 
                  player-driven economy. We're not just building games – we're crafting digital worlds 
                  where imagination meets blockchain reality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;