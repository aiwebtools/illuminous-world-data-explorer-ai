
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Research Scientist, Global Institute",
    content: "Illuminous has revolutionized our resource depletion research. The level of detail in its predictions and calculations saved us months of work.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Torres",
    role: "Environmental Policy Advisor",
    content: "I've never seen such comprehensive analysis of climate data. Illuminous doesn't just provide numbers - it offers context and actionable insights.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emma Lawson",
    role: "Investment Strategist",
    content: "The resource trend predictions have been invaluable for our long-term investment planning. Illuminous offers unparalleled depth in data analysis.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Illuminous is transforming data analysis across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
