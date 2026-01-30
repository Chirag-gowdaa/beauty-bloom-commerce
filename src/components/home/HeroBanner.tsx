import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Glow Up Sale",
    subtitle: "Up to 50% off on skincare essentials",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=800&fit=crop",
    gradient: "from-rose-gold/90 to-transparent",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Discover the latest in luxury beauty",
    cta: "Explore",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=800&fit=crop",
    gradient: "from-plum/80 to-transparent",
  },
  {
    id: 3,
    title: "Fragrance Week",
    subtitle: "Premium perfumes starting at ₹999",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=800&fit=crop",
    gradient: "from-bronze/80 to-transparent",
  },
];

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r",
              slide.gradient
            )}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl animate-slide-up">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 px-8"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "w-8 bg-background"
                : "bg-background/50 hover:bg-background/70"
            )}
          />
        ))}
      </div>
    </section>
  );
};
