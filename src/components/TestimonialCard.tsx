
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="bg-black/20 border-blue-900/30 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500"
          />
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-gray-300 italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
