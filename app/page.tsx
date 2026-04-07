import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import FailurePointsSection from "@/components/home/FailurePointsSection";
import LifecycleSection from "@/components/home/LifecycleSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import DeliverablesSection from "@/components/home/DeliverablesSection";
import ClosingCTASection from "@/components/home/ClosingCTASection";

export const metadata = {
  title: "AccruLabs — Building Defensible Data Ecosystems",
  description:
    "AccruLabs is a CA firm specialising in DPDP compliance, privacy engineering, and data governance for Indian businesses.",
};

export default function HomePage() {
  return (
    <>
      <Navbar variant="main" />
      <main>
        <HeroSection />
        <Divider />
        <ProblemSection />
        <Divider />
        <FailurePointsSection />
        <Divider />
        <LifecycleSection />
        <Divider />
        <ProductsSection />
        <Divider />
        <WhatWeDoSection />
        <Divider />
        <DeliverablesSection />
        <ClosingCTASection />
      </main>
      <Footer variant="main" />
    </>
  );
}
