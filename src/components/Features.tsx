import { Shield, Clock, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-kayayoo-yellow" />,
      title: "Trust",
      description: "Verified couriers and secure escrow payments",
    },
    {
      icon: <Clock className="w-12 h-12 text-kayayoo-yellow" />,
      title: "Speed",
      description: "Quicker deliveries using international travelers",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-kayayoo-yellow" />,
      title: "Cost",
      description: "Competitive pricing compared to traditional couriers",
    },
  ];

  return (
    <div className="bg-kayayoo-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why Choose <span className="text-kayayoo-yellow">Kayayoo</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-b from-kayayoo-darkgray to-kayayoo-black border border-kayayoo-darkgray hover:border-kayayoo-yellow/20 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;