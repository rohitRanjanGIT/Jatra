import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JourneyProvider } from './contexts/JourneyContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import JourneyScheduler from './pages/JourneyScheduler';
import Results from './pages/Results';
import About from './pages/About';

function App() {
  return (
    <JourneyProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scheduler" element={<JourneyScheduler />} />
              <Route path="/results" element={<Results />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </JourneyProvider>
  );
}

export default App;