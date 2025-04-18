import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Navigation, User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import FormField from './FormField';
import DatePickerField from './DatePickerField';
import Button from '../common/Button';
import { useJourney } from '../../contexts/JourneyContext';

const JourneyForm: React.FC = () => {
  const { formData, updateFormData, submitForm } = useJourney();
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleDobChange = (date: Date | null) => {
    updateFormData({ dateOfBirth: date });
  };
  
  const handleStartDateChange = (date: Date | null) => {
    updateFormData({ startDate: date });
  };
  
  const handleEndDateChange = (date: Date | null) => {
    updateFormData({ endDate: date });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await submitForm();
    navigate('/results');
  };
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };
  
  // Set minimum dates
  const today = new Date();
  const minStartDate = new Date();
  minStartDate.setDate(today.getDate() + 1); // Start date at least tomorrow
  
  const minEndDate = formData.startDate 
    ? new Date(formData.startDate.getTime()) 
    : new Date();
  minEndDate.setDate(minEndDate.getDate() + 1); // End date at least one day after start date
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-2xl md:text-3xl text-maroon-700 mb-6 text-center">Plan Your Auspicious Journey</h2>
      
      <motion.form 
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <motion.div variants={itemVariants}>
          <FormField 
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="mb-6"
            icon={<User size={18} />}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemVariants}>
            <FormField 
              label="Current Location"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              placeholder="Your current city"
              required
              icon={<MapPin size={18} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FormField 
              label="Destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Where are you going?"
              required
              icon={<Navigation size={18} />}
            />
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants}>
          <DatePickerField
            label="Date of Birth"
            selected={formData.dateOfBirth}
            onChange={handleDobChange}
            placeholder="Select your date of birth"
            required
            maxDate={today}
            icon={<Calendar size={18} />}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemVariants}>
            <DatePickerField
              label="From Date"
              selected={formData.startDate}
              onChange={handleStartDateChange}
              placeholder="Select your earliest travel date"
              required
              minDate={minStartDate}
              icon={<Calendar size={18} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <DatePickerField
              label="To Date"
              selected={formData.endDate}
              onChange={handleEndDateChange}
              placeholder="Select your latest travel date"
              required
              minDate={minEndDate}
              icon={<Calendar size={18} />}
            />
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants}>
          <FormField 
            label="Purpose of Travel (Optional)"
            name="purpose"
            value={formData.purpose || ''}
            onChange={handleChange}
            placeholder="E.g., Business, Vacation, Wedding, etc."
            as="textarea"
            icon={<FileText size={18} />}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <Button 
            type="submit" 
            variant="primary"
            className="px-8 py-3 text-lg"
            disabled={!formData.fullName || !formData.currentLocation || !formData.destination || 
                     !formData.dateOfBirth || !formData.startDate || !formData.endDate}
          >
            Find Auspicious Dates
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default JourneyForm;