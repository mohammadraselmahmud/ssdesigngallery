
import React from 'react';
import qrimg from "@/assets/qr-app-download.png"

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="h-40 bg-white/20 rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800 rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">Ready to start your design journey?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl">
                Get the full experience on our mobile app. Browse 5000+ designs, customize your dimensions, and track your order in real-time.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.ssdesigngallery.app&pcampaignid=web_share" className="flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-2xl hover:bg-slate-100 transition-all font-bold shadow-lg">
                  <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" alt="GPlay" className="h-6" />
                  <span>Get on Play Store</span>
                </a>
                {/* <button className="flex items-center space-x-3 bg-slate-700 text-white border border-white/20 px-8 py-4 rounded-2xl hover:bg-slate-600 transition-all font-bold">
                  <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" alt="Apple" className="h-6 invert" />
                  <span>Get on App Store</span>
                </button> */}
              </div>
            </div>

            <div className="lg:w-2/5 flex flex-col items-center">
              <div className="p-6 bg-white rounded-3xl mb-4 shadow-xl">
                {/* Placeholder for QR code */}
                <div className="w-48 h-48 bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300">
                  <img src={qrimg} alt="QR Code" className="w-40 h-40" />
                </div>
              </div>
              <p className="text-slate-400 font-medium">Scan to download instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
