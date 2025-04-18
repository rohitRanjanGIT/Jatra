import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Sun, Moon } from 'lucide-react';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-cream-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
            About Jatra
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we blend ancient wisdom with modern technology to help you find the most auspicious times for your journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Jatra, we believe that timing is everything. Our mission is to help you embark on your journeys at the most auspicious times, 
              according to the ancient wisdom of the Hindu calendar and astrological insights.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're planning a business trip, a vacation, a pilgrimage, or any other journey, 
              we provide personalized recommendations to ensure your travels are aligned with cosmic energies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/2395249/pexels-photo-2395249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Ancient Calendar"
              className="rounded-lg shadow-lg h-full object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-md p-8 mb-16"
        >
          <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-6 text-center">
            Understanding the Hindu Calendar (Panchang)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-xl text-maroon-600 mb-3 flex items-center">
                <Calendar className="h-5 w-5 text-saffron-500 mr-2" />
                Tithi (Lunar Day)
              </h3>
              <p className="text-gray-600 mb-4">
                Tithi refers to the lunar day, based on the angular relationship between the sun and moon. 
                There are 30 tithis in a lunar month, each with its own significance for different activities.
              </p>
              
              <h3 className="font-medium text-xl text-maroon-600 mb-3 flex items-center">
                <Star className="h-5 w-5 text-saffron-500 mr-2" />
                Nakshatra (Lunar Mansion)
              </h3>
              <p className="text-gray-600">
                The moon's position in one of the 27 Nakshatras (lunar mansions) influences the energy of the day. 
                Certain Nakshatras are more favorable for travel than others.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl text-maroon-600 mb-3 flex items-center">
                <Sun className="h-5 w-5 text-saffron-500 mr-2" />
                Vara (Weekday)
              </h3>
              <p className="text-gray-600 mb-4">
                Each day of the week is ruled by a different planet, bringing its unique influence. 
                For example, Thursday (Guruvara) is ruled by Jupiter and is generally considered auspicious for beginning journeys.
              </p>
              
              <h3 className="font-medium text-xl text-maroon-600 mb-3 flex items-center">
                <Moon className="h-5 w-5 text-saffron-500 mr-2" />
                Yoga & Karana
              </h3>
              <p className="text-gray-600">
                Yoga represents the combined positions of the sun and moon, while Karana is half of a tithi. 
                These factors further refine the auspiciousness of a particular day.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-6">
            How Jatra Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-lg p-6 border border-gold-200">
              <div className="bg-saffron-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-medium text-lg text-maroon-700 mb-3">
                Enter Your Details
              </h3>
              <p className="text-gray-600">
                Provide your name, birth details, and travel information, including your preferred travel date range.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-lg p-6 border border-gold-200">
              <div className="bg-saffron-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-medium text-lg text-maroon-700 mb-3">
                Astrological Analysis
              </h3>
              <p className="text-gray-600">
                Our system analyzes the Hindu calendar and astrological factors to identify auspicious dates within your travel window.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-lg p-6 border border-gold-200">
              <div className="bg-saffron-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-medium text-lg text-maroon-700 mb-3">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600">
                Receive a list of recommended travel dates, each with detailed Panchang information and explanations.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-6">
            Ready to Plan Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the perfect blend of ancient wisdom and modern convenience in planning your next trip.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="primary" 
              onClick={() => navigate('/scheduler')}
              className="text-lg px-8 py-3"
            >
              Plan Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;