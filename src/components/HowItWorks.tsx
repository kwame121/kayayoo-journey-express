import { Package, Plane, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Package className="w-10 h-10 text-kayayoo-yellow" />,
      title: "Share Package Details",
      description: "Specify size, weight, and destination of your package",
    },
    {
      icon: <Plane className="w-10 h-10 text-kayayoo-yellow" />,
      title: "Find Couriers",
      description: "Match with travelers heading to your destination",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-kayayoo-yellow" />,
      title: "Secure Delivery",
      description: "Handover package and track delivery progress",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-kayayoo-black to-kayayoo-darkgray py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-in">
          A Smarter Way to Send Packages
        </h2>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-kayayoo-yellow/20 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-kayayoo-darkgray p-6 rounded-lg border border-kayayoo-darkgray hover:border-kayayoo-yellow/20 transition-all duration-300 hover:scale-105">
                  <div className="mb-4 flex justify-center transform transition-transform duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </div>
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-kayayoo-yellow text-black font-bold flex items-center justify-center animate-bounce">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;