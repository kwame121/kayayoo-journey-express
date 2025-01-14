import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kayayoo-black to-kayayoo-darkgray">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform -rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-kayayoo-yellow opacity-5 rounded-full animate-float"></div>
        <div className="absolute transform rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-kayayoo-yellow opacity-5 rounded-full animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kayayoo-yellow to-kayayoo-lightyellow bg-clip-text text-transparent">
            Revolutionizing Cross-Border Package Delivery in Africa
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Affordable, fast, and secure delivery by leveraging trusted international travelers.
          </p>
          <Button 
            className="bg-kayayoo-yellow hover:bg-kayayoo-yellow/90 text-black font-semibold px-8 py-6 text-lg rounded-full"
            onClick={() => console.log("Join waitlist clicked")}
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;