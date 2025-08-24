import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              onClick={() => scrollToSection("team")}
            >
              Our Team
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              onClick={() => scrollToSection("about")}
            >
                About Us
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              onClick={() => scrollToSection("roadmap")}
            >
              Roadmap
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
