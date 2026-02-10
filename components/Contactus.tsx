
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 font-outfit tracking-tight">Connect With Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Have questions about a design? We're here to help you find the perfect SS inspiration for your project.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-500">For inquiries and support</p>
                </div>
              </div>
              <a href="mailto:ssdesigngallery@gmail.com" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">ssdesigngallery@gmail.com</a>
            </div>

            <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.54 4.197 1.57 6.075L0 24l6.135-1.611a11.82 11.82 0 005.912 1.586h.005c6.632 0 12.028-5.396 12.033-12.033a11.776 11.776 0 00-3.528-8.517"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-900">WhatsApp</h3>
                  <p className="text-green-700">Chat with us instantly</p>
                </div>
              </div>
              <a href="https://wa.me/8801631254639" className="text-xl font-bold text-green-900 hover:text-green-700 transition-colors">01631254639</a>
            </div>
          </div>

          {/* Social Links Placeholder */}
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4 font-outfit uppercase tracking-wider">Stay Inspired</h3>
            <p className="text-slate-400 mb-8">Follow our daily design updates on social media</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">FB</div>
              <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">IG</div>
              <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">YT</div>
            </div>
          </div>
        </div>

        {/* Copyright and Ownership Section */}
        <section className="bg-slate-50 p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-1 text-slate-900 bg-slate-900"></div>
            <h2 className="text-3xl font-bold text-slate-900 font-outfit">Copyright and Ownership</h2>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
            <p>
              All designs and images displayed here are our original creations. However, we have collected some pictures from various social media platforms, websites, and printed catalogs.
            </p>
            <p className="font-medium text-slate-800 border-l-4 border-slate-900 pl-6 bg-slate-100/50 py-4 rounded-r-xl">
              If the original owner of any image or design can prove their ownership, we will respectfully credit them. If they prefer, the design will be promptly removed from our platform.
            </p>
            <p>
              For any inquiries regarding copyright or design removals, please contact us using the information provided above.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
