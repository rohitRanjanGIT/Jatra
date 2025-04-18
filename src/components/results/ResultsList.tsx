import React from 'react';
import { motion } from 'framer-motion';
import { useJourney } from '../../contexts/JourneyContext';
import ResultCard from './ResultCard';
import { Calendar, MapPin } from 'lucide-react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const ResultsList: React.FC = () => {
  const { formData, results } = useJourney();
  const navigate = useNavigate();
  
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No results found. Please try with different dates.</p>
        <Button
          variant="primary"
          className="mt-4"
          onClick={() => navigate('/scheduler')}
        >
          Back to Journey Planner
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <motion.div 
        className="bg-cream-50 rounded-lg p-5 shadow border border-gold-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-heading text-xl text-maroon-800 mb-3">Journey Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-saffron-500 mr-2" />
            <div>
              <span className="text-sm text-gray-500">From</span>
              <p className="font-medium">{formData.currentLocation}</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-saffron-500 mr-2" />
            <div>
              <span className="text-sm text-gray-500">To</span>
              <p className="font-medium">{formData.destination}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-saffron-500 mr-2" />
            <div>
              <span className="text-sm text-gray-500">Travel Window</span>
              <p className="font-medium">
                {formData.startDate?.toLocaleDateString()} - {formData.endDate?.toLocaleDateString()}
              </p>
            </div>
          </div>
          {formData.purpose && (
            <div className="flex col-span-1 md:col-span-2">
              <div>
                <span className="text-sm text-gray-500">Purpose</span>
                <p className="font-medium">{formData.purpose}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="font-heading text-2xl text-maroon-700 mb-6">
          Auspicious Travel Dates for {formData.fullName}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((date, index) => (
            <ResultCard key={index} date={date} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/scheduler')}
          >
            Plan Another Journey
          </Button>
          <Button variant="secondary">
            Download as PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsList;