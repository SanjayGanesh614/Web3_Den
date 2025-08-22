import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import PhotoGallery from "@/components/PhotoGallery";
import Roadmap from "@/components/Roadmap";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen space-background">
      <ScrollAnimations />
      <Hero />
      <TeamSection />
      <PhotoGallery />
      <Roadmap />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Web3 Den. Built for the future of Computing.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
