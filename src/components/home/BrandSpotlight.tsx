import { brands } from "@/data/products";

export const BrandSpotlight = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Brands
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Shop from your favorite premium beauty brands
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="px-6 py-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-display text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
