import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import GoodCupSection from "@/components/sections/GoodCupSection";
import ProductEcosystemSection from "@/components/sections/ProductEcosystemSection";
import CustomBrandingSection from "@/components/sections/CustomBrandingSection";
import SustainabilityPromiseSection from "@/components/sections/SustainabilityPromiseSection";
import CostSavingCalculatorSection from "@/components/sections/CostSavingCalculatorSection";
import SupplyServicesSection from "@/components/sections/SupplyServicesSection";
import SpecialtyProductsSection from "@/components/sections/SpecialtyProductsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhatWeDoSection />
      <GoodCupSection />
      <ProductEcosystemSection />
      <CustomBrandingSection />
      <SustainabilityPromiseSection />
      <CostSavingCalculatorSection />
      <SupplyServicesSection />
      <SpecialtyProductsSection />
      <ContactSection />
    </div>
  );
}
