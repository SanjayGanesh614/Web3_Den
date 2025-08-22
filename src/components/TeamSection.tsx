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
                    We are a passionate team of blockchain developers and digital artists 
                    united by a common vision: to revolutionize Web3 technology.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With expertise in smart contracts, decentralized applications, and immersive digital experiences, 
                    we are dedicated to creating innovative solutions that empower users and foster a vibrant Web3 ecosystem.
                    </p>
                    
                </div>
                
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Web3 Solutions Deployed</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gradient-accent mb-2">100K+</div>
                      <div className="text-sm text-muted-foreground"> Onboarded</div>
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
                  Our mission is to drive Web3 adoption by developing innovative, transparent, and scalable dApps that empower individuals and communities in the decentralized future.
                  
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