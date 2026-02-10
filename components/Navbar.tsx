
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.webp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="" className="w-10 h-10 rounded-lg flex items-center justify-center font-outfit" />
               
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-outfit uppercase">SS Design Gallery</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#gallery" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Designs</a>
            <a href="#features" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Why Silver?</a> */}
            <a href="https://play.google.com/store/apps/details?id=com.ssdesigngallery.app&pcampaignid=web_share" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95">Get App</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2" aria-label="Toggle menu">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gray-100 px-4 py-4 space-y-3 shadow-xl">
          {/* <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Catalog</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Quality</a> */}
          <a href="#download" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-slate-900 text-center">Download App</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
