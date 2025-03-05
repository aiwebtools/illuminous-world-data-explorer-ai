
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-blue-900/30 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400 mr-2" />
              <div>
                <h2 className="text-xl font-semibold text-white">Illuminous World Data Exploration AI</h2>
                <p className="text-xs text-muted-foreground">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              A sophisticated AI assistant specializing in comprehensive analysis of real-world data and predictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ACCESS ILLUMINOUS
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  MORE AI TOOLS
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Legal & Contact</h3>
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
                  href="https://aiwebtools.ai/terms-of-services" 
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
        
        <div className="border-t border-blue-900/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
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
                More AI Tools <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
