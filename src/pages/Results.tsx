import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import ResultsList from '../components/results/ResultsList';
import Loader from '../components/common/Loader';
import { useJourney } from '../contexts/JourneyContext';

const Results: React.FC = () => {
  const { results, isLoading, formData } = useJourney();
  
  // Check if form has been submitted
  const formSubmitted = formData.fullName && formData.currentLocation && formData.destination;
  
  // If form wasn't submitted, redirect to scheduler
  if (!formSubmitted) {
    return <Navigate to="/scheduler" />;
  }
  
  return (
    <div className="bg-cream-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader text="Consulting the stars and planets for your journey..." />
            <p className="text-gray-600 mt-4 text-center max-w-md">
              We're analyzing astrological factors to find the most auspicious dates for your journey.
              This may take a moment...
            </p>
          </div>
        ) : (
          <ResultsList />
        )}
      </div>
    </div>
  );
};

export default Results;