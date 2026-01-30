import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "15-day return policy",
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Genuine products only",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert beauty advice",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-champagne flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-bronze" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
