
import React from 'react';

const DataDeletion: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-red-50 p-12 text-center border-b border-red-100">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">User Data Deletion Instructions</h1>
            <p className="text-slate-600 max-w-xl mx-auto">We value your privacy and provide you with full control over your data. Follow these steps to manage your information.</p>
          </div>

          <div className="p-8 md:p-16 space-y-12">
            <section>
              <p className="text-lg text-slate-700 leading-relaxed mb-10">
                If you have used our app via <strong>Facebook Login</strong> and wish to delete your activities or personal data from our app, you can do so by following these steps:
              </p>

              <div className="space-y-6">
                {[
                  "Go to your Facebook Profile's Settings & Privacy > Settings.",
                  "Look for 'Apps and Websites' and you will see all of the apps and websites you linked with your Facebook.",
                  "Search and select 'Design Gallery' in the list.",
                  "Click the 'Remove' button."
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-slate-800 font-medium text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6 font-outfit">Alternative Request Method</h3>
              <p className="text-slate-300 mb-6 text-lg">
                Alternatively, you can contact us directly with a request to delete your data. We respect your right to be forgotten.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/10 p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-xl font-bold">ssdesigngallery@gmail.com</span>
                </div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Processed within 7 business days</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
