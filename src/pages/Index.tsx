import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BentoGrid from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-kayayoo-black text-white">
      <Hero />
      <About/>
      <Features />
      <HowItWorks />
      <BentoGrid />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;