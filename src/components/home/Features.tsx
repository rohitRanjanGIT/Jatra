import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Compass, Clock } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-saffron-500" />,
    title: 'Hindu Calendar Integration',
    description: 'Plan your journeys based on the traditional Hindu Panchang calendar for optimal timing.'
  },
  {
    icon: <Star className="h-8 w-8 text-saffron-500" />,
    title: 'Personalized Recommendations',
    description: 'Receive travel date recommendations based on your birth details and journey specifics.'
  },
  {
    icon: <Compass className="h-8 w-8 text-saffron-500" />,
    title: 'Detailed Astrological Insights',
    description: 'Understanding of why certain dates are favorable with tithi and nakshatra details.'
  },
  {
    icon: <Clock className="h-8 w-8 text-saffron-500" />,
    title: 'Auspicious Time Windows',
    description: 'Find the most auspicious days within your preferred travel date range.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
            Plan Your Journey with Confidence
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Jatra combines ancient wisdom with modern planning to help you embark on your journey at the most auspicious time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-cream-50 rounded-xl p-6 border border-gold-200 shadow-sm h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-maroon-700 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;