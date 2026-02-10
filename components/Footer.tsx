
import React from 'react';
import logo from '@/assets/logo.webp';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

    const [categories, setCategories] = React.useState<string[]>([]);
  
   
  
    React.useEffect(()=>{
      const res = fetch(`https://api.ssdesigngallery.com/api/category?limit=4&`)
      .then(res => res.json())
      .then(data => {
        if(data.success) { 
           setCategories(data.data?.data || [])
        }  
      })
      .catch(err => console.error('Error fetching categories:', err));
  
  
    },[setCategories])


  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="ss design gallery logo" className="w-10 h-10 bg-slate-900 rounded-lg" />
              {/* <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div> */}
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">SS Design Gallery</span>
            </div>
            <p className="text-gray-500 mb-6">SS Design Gallery in Bangladesh. Excellence in windows, doors, and architectural steel work.</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-sm tracking-wider">Categories</h4>
            <ul className="space-y-2 text-gray-500">
              {
                categories?.length > 0 && categories.map(cat => (
                  <li key={cat?._id}><a href="#" className="hover:text-slate-900 transition-colors">{cat?.name}</a></li>
                ))
              }
               
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/data-deletion" className="hover:text-slate-900 transition-colors">Data Deletion</Link></li> 
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-500">
            
              <li className="flex items-start space-x-3 text-sm">
                <span>Email: ssdesigngallery@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <span>WhatsApp: 01631254639</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 SS Design Gallery. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
