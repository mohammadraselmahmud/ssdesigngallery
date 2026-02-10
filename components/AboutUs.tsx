
import React from 'react';

const AboutUs: React.FC = () => {
  const values = [
    {
      title: "Quality First",
      desc: "We prioritize designs that use SS 304 and 316 grades for lasting beauty.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    },
    {
      title: "Design Innovation",
      desc: "Constantly updating our gallery with the latest global trends in laser cutting.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: "Zero Risk",
      desc: "Our app is strictly for inspiration. No payments, no hidden fees, just designs.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80" alt="Steel background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-outfit">Our Steel Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">We are redefining how people discover and select Stainless Steel designs through digital innovation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80" alt="Design planning" className="rounded-[2.5rem] shadow-2xl relative z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-0 opacity-60"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-outfit">Modernizing the Fabrication Journey</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                In an industry traditionally reliant on physical catalogs and local word-of-mouth, <strong>SS Design Gallery</strong> was born out of a simple need: accessibility. 
                We realized that homeowners often struggle to visualize premium SS designs before committing to fabrication.
              </p>
              <p>
                Our platform serves as a <strong>bridge of inspiration</strong>. We curate thousands of high-definition layouts—from minimalist windows to luxury laser-cut gates—to ensure you find exactly what complements your architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((val, idx) => (
            <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-outfit uppercase tracking-tight">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 gap-2 rotate-12 scale-150">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-40 bg-white rounded-lg"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">Ready to see more?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Download our mobile app to experience the full gallery with HD zoom and AR visualization.</p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Get the App Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
