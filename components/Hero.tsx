
import React from 'react';
import img from "@/assets/ss-balcony-grill-2217540824-9m9l1n4x.avif"
import windowimg from "@/assets/window.jpg"

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        {/* <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Modern home with premium SS windows and doors" className="w-full h-full object-cover rounded-bl-full" /> */}
        <img src={img} alt="Modern home with premium SS windows and doors" className="w-full h-full object-cover rounded-bl-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full text-slate-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-slate-600 animate-pulse"></span>
              <span>Premium Fabrication in BD</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 font-outfit">
              Elegant <span className="text-slate-500">Sliding Silver</span> SS Design Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Specializing in custom SS windows, luxury doors, secure main gates, and architectural stair railings. We combine the strength of steel with the elegance of silver finishes for your modern space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://play.google.com/store/apps/details?id=com.ssdesigngallery.app&pcampaignid=web_share" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center">
                Download Our App
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              {/* <a href="#gallery" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-slate-400 transition-all flex items-center justify-center">
                Explore Windows & Doors
              </a> */}
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Sliding Silver App on Google Play" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Sliding Silver App on App Store" className="h-8" />
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 float">
              <img 
                src={windowimg}
                // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Modern SS sliding window and balcony door design" 
                className="rounded-3xl shadow-2xl border-8 border-slate-900 w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
