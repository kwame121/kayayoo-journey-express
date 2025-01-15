import { Shield, Clock, DollarSign } from "lucide-react";

const About = () => {
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
    <div id="about" className="bg-kayayoo-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-in">
          What is <span className="text-kayayoo-yellow">Kayayoo</span>?
        </h2>
        <div className="w-full flex items-center justify-center">
 <p className="text-center text-xl xl:w-[850px] leading-9">
        Kayayoo is transforming the way packages are delivered across borders by connecting individuals who need to send items with trusted travelers heading to their destination. By leveraging the power of verified couriers, Kayayoo offers a faster, more affordable, and secure alternative to traditional delivery services. Whether you're sending a package to loved ones or looking to maximize your travel by earning extra income, Kayayoo ensures a seamless and reliable experience for all users. Starting with routes between Ghana and the US, we’re building a smarter, community-driven logistics network for the future.
       </p>
        </div>
      
      </div>
    </div>
  );
};

export default About;