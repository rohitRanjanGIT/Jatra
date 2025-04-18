import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useJourney } from '../../contexts/JourneyContext';
import ResultCard from './ResultCard';
// import { Calendar, MapPin } from 'lucide-react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const ResultsList: React.FC = () => {
  const { formData, results } = useJourney();
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = () => {
    if (!resultsRef.current) return;
    
    const options = {
      margin: 10,
      filename: `${formData.fullName}_travel_dates.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(resultsRef.current).set(options).save();
  };
  
  if (results.length === 0) {
    // ...existing code...
  }
  
  return (
    <div className="space-y-8" ref={resultsRef}>
      <motion.div 
        className="bg-cream-50 rounded-lg p-5 shadow border border-gold-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ...existing code... */}
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
          <Button 
            variant="secondary"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsList;