import React from 'react';
import { motion } from 'framer-motion';
import JourneyForm from '../components/journey/JourneyForm';

const JourneyScheduler: React.FC = () => {
  return (
    <div className="bg-cream-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
            Find Your Auspicious Travel Dates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your details below and we'll recommend the most favorable dates for your journey based on 
            the Hindu calendar and your astrological profile.
          </p>
        </motion.div>
        
        <JourneyForm />
      </div>
    </div>
  );
};

export default JourneyScheduler;