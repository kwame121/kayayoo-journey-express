import { Users, TrendingUp, Globe, Shield } from "lucide-react";

const BentoGrid = () => {
  const items = [
    {
      title: "Growing Community",
      description: "Join thousands of users connecting across borders",
      icon: <Users className="w-6 h-6" />,
      className: "md:col-span-2",
    },
    {
      title: "Market Growth",
      description: "Expanding rapidly across African markets",
      icon: <TrendingUp className="w-6 h-6" />,
      className: "md:row-span-2",
    },
    {
      title: "Global Reach",
      description: "Connecting Ghana to the world",
      icon: <Globe className="w-6 h-6" />,
      className: "md:col-span-2",
    },
    {
      title: "Secure Platform",
      description: "Built with security at its core",
      icon: <Shield className="w-6 h-6" />,
      className: "",
    },
  ];

  return (
    <div id="highlights" className="bg-kayayoo-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-in">
          Platform <span className="text-kayayoo-yellow">Highlights</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                item.className
              } group p-8 bg-gradient-to-br from-kayayoo-darkgray to-black border border-kayayoo-darkgray hover:border-kayayoo-yellow/20 rounded-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-kayayoo-yellow group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;