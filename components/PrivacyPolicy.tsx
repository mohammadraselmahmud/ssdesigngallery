
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const dataPoints = [
    { label: "Phone Number", status: "Not Collected", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>, color: "text-red-500" },
    { label: "Payment Info", status: "Not Collected", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>, color: "text-red-500" },
    { label: "Device Info", status: "Collected (Optimizations)", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>, color: "text-green-500" },
    { label: "Design Preferences", status: "Collected (User Experience)", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>, color: "text-green-500" }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">Privacy is Core</h1>
          <p className="text-lg text-slate-600">Transparent data practices for a worry-free inspiration experience.</p>
        </div>

        {/* Visual Data Tracker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {dataPoints.map((dp, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <div className={`${dp.color} flex justify-center mb-3`}>{dp.icon}</div>
              <div className="font-bold text-slate-900 text-sm mb-1">{dp.label}</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{dp.status}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Camera and AR Usage</h2>
            <div className="bg-slate-900 text-slate-300 p-8 rounded-[2rem] border-l-8 border-blue-500">
              <p className="mb-0">
                Our application requests camera access exclusively for the <strong>Augmented Reality (AR) Preview</strong> tool. 
                All image processing happens locally on your device's memory. We do <strong>not</strong> record, save, or transmit your camera feed or images of your home to our servers.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">How we use data</h2>
              <p>We analyze which design categories are most popular (e.g., 'Modern Gates' vs 'Interior Railings') to prioritize new uploads for our gallery. This is done using anonymous device IDs that cannot identify you personally.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Zero Sales Policy</h2>
              <p>We are not an advertising network. Your design interests are never sold to insurance companies, real estate agents, or third-party marketing firms.</p>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Data Security</h2>
            <p>Your saved 'Favorite' designs are stored securely within the app's local database. Should you choose to delete the app, all locally cached data and preferences are permanently erased.</p>
          </section>
        </div>

        <div className="mt-20 p-8 bg-slate-50 rounded-[2rem] text-center">
          <p className="text-slate-500 text-sm">Have specific privacy questions? Reach out at <span className="font-bold text-slate-900 underline">privacy@ssdesigngallery.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
