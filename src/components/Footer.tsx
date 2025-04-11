import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-kayayoo-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Kayayoo</h3>
            <p className="text-gray-400">Revolutionizing cross-border package delivery in Africa.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-kayayoo-yellow">About Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-kayayoo-yellow">Privacy Policy</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-kayayoo-yellow">Terms of Service</a></li> */}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400" >Email: <a href="mailto:info@kayayoo.com">info@kayayoo.com</a></li>
              <li className="text-gray-400">2 Whitney Street,</li>
              <li className="text-gray-400">North Grafton,</li>
              <li className="text-gray-400">Massachusetts,</li>
              <li className="text-gray-400">01536</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-kayayoo-black border-kayayoo-darkgray text-white"
              />
              <Button className="bg-kayayoo-yellow hover:bg-kayayoo-yellow/90 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-kayayoo-darkgray text-center text-gray-400">
          © 2025 Kayayoo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;