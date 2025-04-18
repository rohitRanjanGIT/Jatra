import { JourneyFormData, AuspiciousDate } from '../types';
import { formatDate } from './dateUtils';

export const fetchAuspiciousDates = async (formData: JourneyFormData): Promise<AuspiciousDate[]> => {
  const { fullName, currentLocation, destination, dateOfBirth, startDate, endDate, purpose } = formData;
  
  if (!dateOfBirth || !startDate || !endDate) {
    throw new Error('Required date fields are missing');
  }

  const prompt = `
    Suggest 5 auspicious travel dates between ${formatDate(startDate)} and ${formatDate(endDate)} 
    for a person named ${fullName} born on ${formatDate(dateOfBirth)} traveling from ${currentLocation} 
    to ${destination}${purpose ? ` for ${purpose}` : ''}. 
    
    For each date, include:
    1. The exact date (DD-MM-YYYY)
    2. Day of the week
    3. Tithi (lunar day) according to Hindu calendar
    4. Nakshatra (lunar mansion)
    5. A brief explanation of why this date is auspicious based on Hindu astrology and Panchang
    
    Format the response as JSON with these fields: date, day, tithi, nakshatra, reason, score (1-10).
  `;

  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = import.meta.env.VITE_GEMINI_API_URL;
    
    // If the API key is not set, use mock data for development
    if (!apiKey) {
      console.warn('Using mock data - GEMINI API KEY not set');
      return getMockAuspiciousDates(startDate, endDate);
    }

    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Parse the response text to extract the JSON
    const text = data.candidates[0].content.parts[0].text;
    const jsonStart = text.indexOf('[');
    const jsonEnd = text.lastIndexOf(']') + 1;
    
    if (jsonStart === -1 || jsonEnd === 0) {
      throw new Error('Could not parse JSON from response');
    }
    
    const jsonText = text.substring(jsonStart, jsonEnd);
    const auspiciousDates = JSON.parse(jsonText);
    
    return auspiciousDates;
  } catch (error) {
    console.error('Error fetching from Gemini API:', error);
    return getMockAuspiciousDates(startDate, endDate);
  }
};

// Mock data for development without API key
const getMockAuspiciousDates = (startDate: Date, endDate: Date): AuspiciousDate[] => {
  const dates: AuspiciousDate[] = [];
  const currentDate = new Date(startDate);
  const tithis = ['Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima', 'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Amavasya'];
  const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const reasons = [
    'This day is ruled by Jupiter, making it auspicious for beginning new journeys. The Nakshatra aligns with successful travel outcomes.',
    'The Moon is in a favorable position and the Tithi supports smooth transitions and new beginnings.',
    'This day has a powerful alignment of planets that supports travel, especially for the purpose mentioned.',
    "Mercury's position is excellent for communication and travel, making journeys started on this day successful.",
    'This is considered a Shubh Muhurat day with Venus influencing positive experiences during travel.',
  ];

  for (let i = 0; i < 5 && currentDate <= endDate; i++) {
    // Skip to the next suitable date
    const daysToAdd = Math.floor(Math.random() * 3) + 1;
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    
    if (currentDate > endDate) break;
    
    const dateString = formatDate(currentDate);
    const dayIndex = currentDate.getDay();
    const tithiIndex = Math.floor(Math.random() * tithis.length);
    const nakshatraIndex = Math.floor(Math.random() * nakshatras.length);
    const score = Math.floor(Math.random() * 4) + 7; // Score between 7-10
    
    dates.push({
      date: dateString,
      day: days[dayIndex],
      tithi: tithis[tithiIndex],
      nakshatra: nakshatras[nakshatraIndex],
      reason: reasons[i],
      score: score
    });
  }
  
  return dates;
};