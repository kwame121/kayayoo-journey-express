import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-kayayoo-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;