
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
import ContactUs from './components/Contactus';
import DataDeletion from './components/DataDeletion';

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
          <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
          </Routes> 
        </main>
        <Footer />
        {/* <AIConsultant /> */}
      </div>
    </HashRouter>
  );
};

export default App;
