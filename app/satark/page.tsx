import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import TopRibbon from "@/components/satark/TopRibbon";
import SatarkHeroSection from "@/components/satark/SatarkHeroSection";
import VisibilitySection from "@/components/satark/VisibilitySection";
import HowItWorksSection from "@/components/satark/HowItWorksSection";
import ChecksSection from "@/components/satark/ChecksSection";
import PricingSection from "@/components/satark/PricingSection";
import TrustBridgeSection from "@/components/satark/TrustBridgeSection";
import EarlyAccessSection from "@/components/satark/EarlyAccessSection";

export const metadata = {
  title: "Satark — DPDP Compliance Diagnostic by AccruLabs",
  description:
    "Satark scans your website and gives you a plain-English DPDP compliance report in 5 minutes. Free scan. Built by CAs. No login required.",
};

export default function SatarkPage() {
  return (
    <>
      <TopRibbon />
      <Navbar variant="satark" />
      <main>
        <SatarkHeroSection />
        <Divider />
        <VisibilitySection />
        <Divider />
        <HowItWorksSection />
        <Divider />
        <ChecksSection />
        <Divider />
        <PricingSection />
        <TrustBridgeSection />
        <EarlyAccessSection />
      </main>
      <Footer variant="satark" />
    </>
  );
}
