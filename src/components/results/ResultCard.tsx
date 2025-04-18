import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { AuspiciousDate } from '../../types';
import { parseFormattedDate, formatDateWithDay } from '../../utils/dateUtils';

interface ResultCardProps {
  date: AuspiciousDate;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ date, index }) => {
  const parsedDate = parseFormattedDate(date.date);
  const formattedDate = formatDateWithDay(parsedDate);

  // Star rating based on score
  const starCount = Math.round(date.score / 2);
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gold-200 hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="border-b border-gold-200">
        <div className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="font-heading text-lg font-bold">{formattedDate}</h3>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < starCount ? 'text-white fill-white' : 'text-white opacity-50'} mr-0.5`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider">Tithi</h4>
            <p className="font-medium text-gray-800">{date.tithi}</p>
          </div>
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider">Nakshatra</h4>
            <p className="font-medium text-gray-800">{date.nakshatra}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Why It's Auspicious</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{date.reason}</p>
        </div>
      </div>
      
      <div className="bg-cream-50 px-4 py-3 flex justify-end">
        <button className="text-sm text-saffron-600 hover:text-saffron-700 font-medium flex items-center">
          {/* <span>Save this date</span> */}
        </button>
      </div>
    </motion.div>
  );
};

export default ResultCard;