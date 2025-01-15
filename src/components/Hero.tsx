import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-kayayoo-darkgray to-kayayoo-black border border-kayayoo-darkgray">
      <nav className="w-full py-4 bg-transparent text-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold kay text-kayayoo-yellow">Kayayoo</div>
          <div className="flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#highlights" className="hover:underline">Highlights</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-semibold mb-10 text-white">
              Redefining Package Delivery Across Borders
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white">
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
                  className="border-kayayoo-yellow text-black hover:text-white hover:bg-kayayoo-yellow/10 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
                  onClick={() => console.log("Learn more clicked")}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute bottom-[-20px] left-0 right-0 h-[50px] xl:h-[50px] dark:xl:h-[50px] bg-gradient-to-t from-kayayoo-yellow dark:from-primary-foreground to-transparent pointer-events-none"></div> */}
    </div>
  );
};

export default Hero;
