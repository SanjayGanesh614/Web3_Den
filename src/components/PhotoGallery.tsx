import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Placeholder images - you can replace these with actual game screenshots
  const images = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&crop=center",
      title: "Space Combat Arena",
      description: "Epic battles across the galaxy"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center", 
      title: "Cyberpunk City",
      description: "Neon-lit urban adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      title: "Digital Realms", 
      description: "Endless virtual worlds to explore"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-20 space-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            GAME UNIVERSE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in breathtaking worlds where every frame tells a story
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-morphism cyber-shadow overflow-hidden scroll-fade-in">
            <div className="relative aspect-video">
              {/* Main image display */}
              <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImage 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Image overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-primary">
                        {image.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full smooth-transition ${
                      index === currentImage 
                        ? 'bg-primary gaming-glow' 
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Loading bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-linear"
                  style={{ 
                    width: `${((currentImage + 1) / images.length) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </Card>

          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-16 rounded-lg overflow-hidden smooth-transition ${
                  index === currentImage 
                    ? 'ring-2 ring-primary gaming-glow scale-110' 
                    : 'hover:scale-105 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;