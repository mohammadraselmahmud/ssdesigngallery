
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 p-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-outfit">Privacy Policy</h1>
            <p className="text-slate-400">Effective as of July 28, 2025</p>
          </div>

          <div className="p-8 md:p-16 space-y-12">
            {/* Salutation & Security */}
            <section className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-outfit">Assalam walekum,</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                We value the trust you place in us when providing your personal information, and we strive to use commercially acceptable means to protect it. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Device Permissions */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Device Permissions We Require
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-slate-300 transition-colors">
                  <div className="font-bold text-slate-900 mb-2">Network Access</div>
                  <p className="text-sm text-slate-600">To detect network environment and support online features.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-slate-300 transition-colors">
                  <div className="font-bold text-slate-900 mb-2">Notification Access</div>
                  <p className="text-sm text-slate-600">To receive phone notification content on apps.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-slate-300 transition-colors">
                  <div className="font-bold text-slate-900 mb-2">Storage</div>
                  <p className="text-sm text-slate-600">Write, read, and manage external storage for picture download or upload.</p>
                </div>
              </div>
            </section>

            {/* Advertising */}
            <section className="border-t pt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">Advertising</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-slate-100 px-6 py-4 rounded-xl font-bold text-slate-700">AdMob</div>
                <div className="bg-slate-100 px-6 py-4 rounded-xl font-bold text-slate-700">Meta Audience Network</div>
              </div>
              <p className="mt-4 text-slate-600 italic">
                Personal Data: Trackers; unique device identifiers for advertising (e.g., Google Advertiser ID or IDFA); Usage Data.
              </p>
            </section>

            {/* Links to Other Sites */}
            <section className="border-t pt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">Links to Other Sites</h3>
              <p className="text-slate-600 leading-relaxed">
                This service may contain links to advertisements or other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            {/* Changes */}
            <section className="border-t pt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">Changes to This Privacy Policy</h3>
              <p className="text-slate-600 leading-relaxed">
                We may update our Privacy Policy from time to time. Therefore, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-slate-900 p-8 rounded-3xl text-center text-white">
              <h3 className="text-xl font-bold mb-4 font-outfit">Contact Us</h3>
              <p className="mb-4">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
              <a href="mailto:ssdesigngallery@gmail.com" className="text-blue-400 font-bold text-xl hover:underline">ssdesigngallery@gmail.com</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
