import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'Jatra helped me plan my pilgrimage to Varanasi on the most auspicious day. The journey was smooth and spiritually fulfilling!',
    rating: 5
  },
  {
    name: 'Raj Patel',
    location: 'Delhi, India',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'As someone who values tradition, I was impressed by how Jatra integrated ancient wisdom with modern travel planning. Highly recommend!',
    rating: 5
  },
  {
    name: 'Ananya Singh',
    location: 'Pune, India',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The astrological insights provided for my business trip were incredibly accurate. My meetings were successful beyond expectation.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover how Jatra has helped people find the perfect time for their journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'} mx-0.5`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4 text-center">"{testimonial.quote}"</p>
                
                <div className="text-center">
                  <p className="font-medium text-maroon-700">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;