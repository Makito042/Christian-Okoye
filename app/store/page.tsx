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
    <div className="bg-black text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 bg-radial from-neutral-900 via-neutral-950 to-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Signed Chiefs Memorabilia
          </h1>
          <p className="text-neutral-400 text-base max-w-2xl mx-auto">
            100% guaranteed authentic memorabilia personally signed by Christian Okoye. Complete with tamper-evident hologram Certificate of Authenticity.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="border-b border-neutral-800/80 bg-neutral-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400 text-center">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Tamper-Evident Hologram COA</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Insured Shipping Across the USA &amp; Worldwide</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RotateCcw className="w-4 h-4 text-red-400" />
              <span>Secure Stripe Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Body */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeCategory === cat.value
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
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
