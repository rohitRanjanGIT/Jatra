import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Compass, Calendar, Star } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-16 pb-20 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Journey at the <span className="text-saffron-500">Most Auspicious</span> Time
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Jatra helps you plan your travels according to the Hindu calendar (Panchang) and astrological insights, 
              ensuring your journey begins at the most favorable time.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                variant="primary" 
                onClick={() => navigate('/scheduler')}
                className="text-lg px-8 py-4"
              >
                Start Planning
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/about')}
                className="text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-saffron-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-maroon-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
              
              <motion.div 
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-cream-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6">
                  <img 
                    src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Travel Planning" 
                    className="rounded-lg object-cover w-full h-64 mb-6"
                  />
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-saffron-500 mr-2" />
                      <span className="font-medium">Upcoming Journey</span>
                    </div>
                    <div className="bg-cream-100 px-3 py-1 rounded-full text-sm font-medium text-maroon-700">
                      Auspicious
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Compass className="h-5 w-5 text-saffron-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Destination</p>
                        <p className="font-medium">Varanasi, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-saffron-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Recommended Date</p>
                        <p className="font-medium">27 September 2025</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Auspiciousness Rating</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${i < 4 ? 'text-gold-500 fill-gold-500' : 'text-gray-300'} mr-0.5`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;