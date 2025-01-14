import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kayayoo-black to-kayayoo-darkgray">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute transform -rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-kayayoo-yellow rounded-full animate-float"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute transform rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-kayayoo-yellow rounded-full animate-float delay-1000"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-kayayoo-yellow to-kayayoo-lightyellow bg-clip-text text-transparent">
            Revolutionizing Cross-Border Package Delivery in Africa
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Affordable, fast, and secure delivery by leveraging trusted international travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-kayayoo-yellow hover:bg-kayayoo-yellow/90 text-black font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
                onClick={() => console.log("Join waitlist clicked")}
              >
                Join the Waitlist
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="border-kayayoo-yellow text-kayayoo-yellow hover:bg-kayayoo-yellow/10 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
                onClick={() => console.log("Learn more clicked")}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;