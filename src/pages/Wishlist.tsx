import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (wishlistItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save your favorite products here for later.
            </p>
            <Link to="/products">
              <Button className="bg-gradient-rose text-primary-foreground">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          My Wishlist ({wishlistItems.length} items)
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-card rounded-xl overflow-hidden shadow-card group"
            >
              <Link
                to={`/product/${item.product.id}`}
                className="block aspect-square overflow-hidden"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {item.product.brand}
                </p>
                <Link to={`/product/${item.product.id}`}>
                  <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-2">
                    {item.product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-foreground">
                    {formatPrice(item.product.price)}
                  </span>
                  {item.product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(item.product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-gradient-rose text-primary-foreground"
                    onClick={() => {
                      addToCart(item.product);
                      removeFromWishlist(item.product.id);
                    }}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeFromWishlist(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
