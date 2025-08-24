import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAModal = ({ isOpen, onClose }: CTAModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
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
              <h2 className="text-3xl font-bold text-gradient-primary mb-4">
                Join Our Community
              </h2>
              <p className="text-muted-foreground">
                Choose how you'd like to connect with us
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                className="w-full px-6 py-3 bg-primary hover:scale-105 hover:bg-primary/90 text-gradient-foreground rounded-lg gaming-glow smooth-transition"
                onClick={() => window.open("https://chat.whatsapp.com/Jqx3lGV1cLJH27YVC8WNUM?mode=ems_copy_t", "_blank")}
              >
                Connect on WhatsApp
              </Button>
              
              <Button
                className="w-full px-6 py-3 bg-primary hover:scale-105 hover:bg-primary/90 text-gradient-foreground rounded-lg gaming-glow smooth-transition"
                onClick={() => window.open("https://roadmap.sh/blockchain", "_blank")}
              >
                View Web3 Roadmap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTAModal;
