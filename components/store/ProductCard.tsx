'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isOutOfStock = product.stock <= 0;

  return (
    <div className="group rounded-2xl bg-white border border-[#EAE5DE] hover:border-[#C8102E] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(200,16,46,0.12)] hover:-translate-y-1">
      {/* Product Image */}
      <Link href={`/store/${product.slug}`} className="relative aspect-square overflow-hidden bg-[#F5F1EB] block">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.featured && (
            <span className="px-2.5 py-1 bg-[#C8102E] text-white text-[10px] font-black uppercase tracking-wider rounded-md shadow-md">
              Featured
            </span>
          )}
          {isLowStock && (
            <span className="px-2.5 py-1 bg-amber-400 text-[#161413] text-[10px] font-black uppercase tracking-wider rounded-md shadow-md">
              Only {product.stock} Left
            </span>
          )}
          {isOutOfStock && (
            <span className="px-2.5 py-1 bg-[#EAE5DE] text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
              Sold Out
            </span>
          )}
        </div>

        {/* COA Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2 py-1 rounded-md text-[10px] text-stone-800 font-semibold flex items-center space-x-1 border border-[#EAE5DE] shadow-xs">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>Hand-Signed + COA</span>
        </div>
      </Link>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#C8102E] font-black">
            {product.category}
          </span>
          <Link href={`/store/${product.slug}`}>
            <h3 className="text-base font-bold text-[#161413] group-hover:text-[#C8102E] transition mt-1 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-[#F5F1EB] flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-black text-[#161413]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.allowInscription && (
              <span className="text-[10px] text-stone-400 block">
                Custom inscription available
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`p-2.5 rounded-xl font-bold transition flex items-center justify-center ${
              added
                ? 'bg-emerald-600 text-white'
                : isOutOfStock
                ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                : 'bg-[#C8102E] hover:bg-[#A80C26] text-white shadow-md shadow-[#C8102E]/20'
            }`}
            title="Add to Cart"
          >
            {added ? (
              <Check className="w-5 h-5" />
            ) : (
              <ShoppingBag className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
