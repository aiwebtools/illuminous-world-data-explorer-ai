
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-black/50 border-t border-blue-900/30 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-start gap-3 mb-5">
              <Globe className={`text-blue-400 flex-shrink-0 ${isMobile ? 'h-7 w-7 mt-1' : 'h-10 w-10'}`} />
              <div>
                <h2 className={`font-semibold text-white leading-tight ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                  Illuminous World Data Exploration AI
                </h2>
                <p className="text-xs text-blue-300/90 mt-1">
                  Free AI Tools by AiWebTools.AI
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 pl-0 md:pl-[52px]">
              Advanced free AI tools for data analysis and predictions. Part of the AiWebTools.AI suite of artificial intelligence solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Free AI Tools</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Data Analysis AI Tool
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  More Free AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">AI Web Tools Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Predictive Analytics AI</li>
              <li>Data Visualization Tools</li>
              <li>Machine Learning Tools</li>
              <li>Business Intelligence AI</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact & Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* SEO-Rich Bottom Section */}
        <div className="border-t border-blue-900/30 pt-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">AiWebTools.AI - Leading Free AI Tools Provider</h4>
            <p className="text-sm text-gray-400 max-w-4xl mx-auto">
              Discover the most comprehensive collection of free AI tools and AI web tools. AiWebTools.AI offers cutting-edge artificial intelligence solutions for data analysis, predictions, and business intelligence. Join thousands of professionals using our free AI tools daily.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                © 2025 AI WEB TOOLS LLC - AiWebTools.AI - All rights reserved.
              </a>
            </p>
            
            <div>
              <Button 
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
                size="sm"
                asChild
              >
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Explore More AI Tools <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
