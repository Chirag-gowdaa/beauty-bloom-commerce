import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { TrustBadges } from "@/components/home/TrustBadges";
import { BrandSpotlight } from "@/components/home/BrandSpotlight";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <TrustBadges />
      <CategoryGrid />
      <TrendingProducts />
      <BrandSpotlight />
    </Layout>
  );
};

export default Index;
