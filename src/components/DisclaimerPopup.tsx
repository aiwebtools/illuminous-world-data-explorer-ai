
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  onAgree: () => void;
}

const DisclaimerPopup = ({ onAgree }: DisclaimerPopupProps) => {
  const { toast } = useToast();
  
  const handleAgree = () => {
    toast({
      title: "Welcome to Illuminous!",
      description: "You've agreed to our terms. Enjoy exploring data with AI!",
      duration: 3000,
    });
    onAgree();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="w-full max-w-md"
      >
        <Card className="border-blue-500/30 bg-gradient-to-br from-black via-blue-950/40 to-indigo-950/30 shadow-xl shadow-blue-900/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              ILLUMINOUS DISCLAIMER
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-blue-200/90 leading-relaxed">
              By using Illuminous World Data Exploration AI, you acknowledge that:
            </p>
            <ul className="space-y-2 text-sm text-gray-300/90 pl-4">
              <li className="relative pl-5">
                <span className="absolute left-0 text-blue-400">•</span>
                All predictions and analyses are provided for informational purposes only
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 text-blue-400">•</span>
                Results should not be construed as professional advice
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 text-blue-400">•</span>
                We make no warranties regarding accuracy or reliability of the information
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 text-blue-400">•</span>
                Use of this service is entirely at your own risk
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={handleAgree}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-8 py-2 rounded-md shadow-lg shadow-blue-900/30 transition-all"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                I AGREE
                <Check className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;
