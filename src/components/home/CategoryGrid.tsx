import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collection of beauty essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-display text-lg md:text-xl font-semibold text-background mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-background/70">
                  {category.productCount} Products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
