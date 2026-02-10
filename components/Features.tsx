
import React from 'react';
import img1 from "@/assets/158020.jpg"
import img2 from "@/assets/617702.jpg"

const Features: React.FC = () => {
  const features = [
    {
      title: '304 & 316 Grade Steel',
      description: 'We only use top-tier stainless steel ensuring lifetime rust protection and durability.',
      icon: (
        <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      title: 'Custom Laser Cutting',
      description: 'Precise designs with our state-of-the-art laser machinery for intricate patterns.',
      icon: (
        <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.282a6 6 0 01-3.96.54L4.314 15.333a.5.5 0 01-.273-.879l1.857-1.357a1 1 0 01.355-.17l2.805-.624a6 6 0 013.88.522l.602.253a6 6 0 003.885.53l2.805-.624a1 1 0 01.355.17l1.857 1.357a.5.5 0 01-.273.879l-3.204-.383z" /></svg>
      )
    },
    {
      title: 'Expert Installation',
      description: 'Our skilled team ensures flawless fitting at your premises within promised timelines.',
      icon: (
        <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121" /></svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-outfit">The Gold Standard of SS Fabrication</h2>
            <p className="text-lg text-gray-600 mb-10">We bridge the gap between digital design and real-world durability. Every piece is crafted to perfection with high-precision engineering.</p>
            
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={img1} alt="Process" className="rounded-2xl shadow-lg mt-12" />
              <img src={img2} alt="Detail" className="rounded-2xl shadow-lg" />
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
