import HeroSection from "./HeroSection";

import iphoneImage from "../../assets/iphone-14-pro.webp";
import macImage from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="iPhone 14 Pro Max"
        subtitle="Experience the power of the latest iPhone with its advanced features and stunning display."
        link="#shop"
        image={iphoneImage}
      />
      <FeaturedProducts />
      <HeroSection
        title="MacBook Pro"
        subtitle="The most powerful MacBook Pro ever, with the M2 Pro chip."
        link="#shop"
        image={macImage}
      />
    </div>
  );
};

export default HomePage;
