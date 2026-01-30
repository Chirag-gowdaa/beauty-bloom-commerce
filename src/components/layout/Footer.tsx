import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-gradient-rose py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Join the Glow Gang
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-md mx-auto">
            Subscribe for exclusive offers, beauty tips, and early access to new arrivals
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h4 className="font-display text-2xl font-bold mb-4">GlowMart</h4>
            <p className="text-background/70 text-sm mb-4">
              Your destination for premium beauty products. Discover the best in makeup, skincare, haircare, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-background/70 hover:text-background transition-colors">All Products</Link></li>
              <li><Link to="/products?category=makeup" className="text-background/70 hover:text-background transition-colors">Makeup</Link></li>
              <li><Link to="/products?category=skincare" className="text-background/70 hover:text-background transition-colors">Skincare</Link></li>
              <li><Link to="/products?category=haircare" className="text-background/70 hover:text-background transition-colors">Haircare</Link></li>
              <li><Link to="/products?featured=true" className="text-background/70 hover:text-background transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="font-semibold mb-4">Customer Service</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Track Order</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQs</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@glowmart.com</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Beauty Lane, Mumbai, India 400001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 GlowMart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
