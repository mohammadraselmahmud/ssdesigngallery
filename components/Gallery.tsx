
import React, { useState } from 'react';
import { DesignItem } from '../types';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Gate', 'Window', 'Door', 'Stairs', 'Grill'] as const;

const DESIGNS: any[] = [
  { id: '1', title: 'Premium Sliding SS Window', category: 'Window', imageUrl: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳1,200/sqft' },
  { id: '2', title: 'Modern Main Entrance Door', category: 'Door', imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d30?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳65,000 - ৳1,50,000' },
  { id: '3', title: 'Spiral Staircase (Shiri) Railing', category: 'Stairs', imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳2,200/ft' },
  { id: '4', title: 'Luxury Laser Cut Gate', category: 'Gate', imageUrl: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳85,000+' },
  { id: '5', title: 'Minimalist Balcony Grill', category: 'Grill', imageUrl: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳650/sqft' },
  { id: '6', title: 'Commercial Glass-SS Door', category: 'Door', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=500&q=80', priceRange: '৳45,000+' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>(null);
  const [designs, setDesigns] = useState<DesignItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

 

  React.useEffect(()=>{
    const res = fetch(`https://api.ssdesigngallery.com/api/product?limit=9&${filter ? `categoryId=${filter}` : ''}`)
    .then(res => res.json())
    .then(data => {
      if(data.success) { 
         setDesigns(data.data?.data || [])
      }  
    })
    .catch(err => console.error('Error fetching designs:', err));


  },[setDesigns, filter])

  console.log(designs)
  
  React.useEffect(()=>{
     const res = fetch('https://api.ssdesigngallery.com/api/category?limit=5')
    .then(res => res.json())
    .then(data => {
      if(data.success) {  
         setCategories(data.data?.data || [])
      }  
    })
    .catch(err => console.error('Error fetching categories:', err));
  },[setCategories])
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">Premium SS Catalog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our range of Sliding Silver products. From high-security windows to elegant stair railings, we define modern living.</p>
        
        <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Design category filter">
             <button
              
              onClick={() => setFilter(null)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                
                filter === null ?  'bg-slate-900 text-white shadow-md scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
             All
            </button>
          {categories?.length > 0 && categories.map(cat => (
            <button
              key={cat?._id}
              onClick={() => setFilter(cat?._id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat?._id 
                ? 'bg-slate-900 text-white shadow-md scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat?.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs?.length > 0 && designs?.map((design: any) => (
            <article key={design?._id} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={design?.productImage} 
                  alt={`${design.productName}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Link to="https://play.google.com/store/apps/details?id=com.ssdesigngallery.app&pcampaignid=web_share" className="w-full bg-white text-slate-900 flex items-center justify-center py-3 rounded-xl font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View in App
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{design.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{design.productName}</h3>
                {/* <p className="text-slate-600 font-medium">{design.productPrice} BDT</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
