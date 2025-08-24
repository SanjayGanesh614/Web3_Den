import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Phase1ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Phase1Modal = ({ isOpen, onClose }: Phase1ModalProps) => {
  if (!isOpen) return null;

  const phase1ExpandedContent = {
    title: "FOUNDATION",
    description: "Building a core Understanding of Web3 platform",
    sections: [
      {
        title: "Foundations of  Blockchain",
        content: "Learn the basics of blockchains, decentralization and how  distributed ledgers work."
      },
      {
        title: "Smart Contract and DApps",
        content: "Explore how smart contracts and DApps bring automation and transparency to Web3."
      },
      {
        title: "Cyptographic Wallets & Digital Identity",
        content: "Understand digital wallets, private keys and user-controlled blockchain identities."
      },
      {
        title: "Core Development Skills",
        content: "Start coding with JavaScript, Solidity and Web3 protocols to build real projects."
      }
    ]
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <Card className="glass-morphism cyber-shadow border-2 border-primary/30">
          <CardContent className="p-8">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-accent mb-2 block">
                PHASE 01 
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                {phase1ExpandedContent.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {phase1ExpandedContent.description}
              </p>
            </div>

            {/* Content Sections */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {phase1ExpandedContent.sections.map((section, index) => (
                <div key={index} className="glass-morphism p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-gradient-accent mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="bg-secondary/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Key Learning Resources</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow-pulse"></div>
                  <span className="text-muted-foreground">Cyfrin Updraft Blockchain Basics Course</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow-pulse"></div>
                  <span className="text-muted-foreground">Blockchain Fundamentals by Chainlink</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow-pulse"></div>
                  <span className="text-muted-foreground">Solidity Basics & Smart Contract Development</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gaming-glow"
                onClick={() => window.open("https://roadmap.sh/blockchain", "_blank")}
              >
                Explore Detailed Roadmap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Phase1Modal;
