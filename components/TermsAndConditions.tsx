
import React from 'react';

const TermsAndConditions: React.FC = () => {
  const sections = [
    {
      title: "1. Visual Platform Usage",
      content: "SS Design Gallery is an informational platform. All designs shown are for visual reference and inspiration. We are not a manufacturing entity and do not sell physical products directly through the app."
    },
    {
      title: "2. Intellectual Property",
      content: "The imagery, brand identity, and custom design layouts within the application are property of SS Design Gallery. You may use them for personal inspiration but not for commercial resale or unauthorized redistribution."
    },
    {
      title: "3. No Financial Transactions",
      content: "CRITICAL: Our app contains NO payment systems. We will never ask for your credit card, OTP, or wallet pins. Any external person claiming to be from our 'sales team' asking for money should be ignored."
    },
    {
      title: "4. Accuracy of Information",
      content: "While we strive for accuracy, material prices and fabrication costs are subject to market volatility and local workmanship. Estimates provided are purely for planning purposes."
    },
    {
      title: "5. Third-Party Links",
      content: "Our app may link to fabrication workshops or social media. We do not control or endorse the specific business practices of these third-party entities."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">Terms of Service</h1>
          <p className="text-slate-500">How we operate and what you should expect.</p>
        </div>

        {/* Quick Summary Card */}
        <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-2 font-outfit uppercase tracking-tight">The Gist (Quick Summary)</h2>
            <p className="text-blue-800 leading-relaxed">
              We are a design gallery, not a shop. We don't take money, and we aren't responsible for how your local welder builds these designs. Use our app to find ideas, then find a professional to build them!
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          {sections.map((sec, idx) => (
            <div key={idx} className={`p-8 md:p-12 ${idx !== sections.length - 1 ? 'border-b border-slate-50' : ''}`}>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">{sec.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          Last Updated: October 2023 • SS Design Gallery Legal Dept.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
