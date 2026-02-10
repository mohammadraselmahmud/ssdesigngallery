
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Gallery />
                <Features />
                <DownloadCTA />
              </>
            } />
          <Route path="/about-us" element={
            <>
            <AboutUs />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
            <PrivacyPolicy />
            </>
          } />
          <Route path="/terms-and-conditions" element={
            <>
            <TermsAndConditions />
            </>
          } />
          </Routes>

           
        </main>
        <Footer />
        {/* <AIConsultant /> */}
      </div>
    </HashRouter>
  );
};

export default App;
