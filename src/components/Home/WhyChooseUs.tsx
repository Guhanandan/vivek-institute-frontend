import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Learn from experienced educators with proven track records'
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Personalized attention with limited students per batch'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Material',
    description: 'Well-structured study materials and regular mock tests'
  },
  {
    icon: Target,
    title: 'Focused Approach',
    description: 'Systematic preparation strategy for competitive exams'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;