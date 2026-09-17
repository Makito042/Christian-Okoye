'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/store/ProductCard';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const CATEGORIES = [
  { label: 'All Items', value: 'all' },
  { label: 'Jerseys', value: 'jerseys' },
  { label: 'Footballs', value: 'footballs' },
  { label: 'Helmets', value: 'helmets' },
  { label: 'Photos', value: 'photos' },
  { label: 'Event Tickets', value: 'events' },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Header Banner - Black Layer Under Navbar */}
      <section className="py-16 bg-[#0A0708] text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Signed Chiefs Memorabilia
          </h1>
          <p className="text-neutral-300 text-base max-w-2xl mx-auto font-normal">
            100% guaranteed authentic memorabilia personally signed by Christian Okoye. Complete with tamper-evident hologram Certificate of Authenticity.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="border-b border-[#EAE5DE] bg-white py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600 font-medium text-center">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Tamper-Evident Hologram COA</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Truck className="w-4 h-4 text-[#C8102E]" />
              <span>Insured Shipping Across the USA &amp; Worldwide</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RotateCcw className="w-4 h-4 text-[#161413]" />
              <span>Secure Stripe Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Body */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeCategory === cat.value
                  ? 'bg-[#C8102E] text-white shadow-md shadow-[#C8102E]/25'
                  : 'bg-white text-stone-600 hover:text-[#161413] hover:bg-stone-50 border border-[#EAE5DE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
