import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gradient-to-r from-maroon-700 to-maroon-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Begin Your Journey at the Perfect Moment
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
            Let the ancient wisdom of the Hindu calendar guide your travel plans. 
            Start planning your auspicious journey today.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <Button 
              variant="secondary" 
              onClick={() => navigate('/scheduler')}
              className="text-lg px-8 py-4"
            >
              Plan Your Journey Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;