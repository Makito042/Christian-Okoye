'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ShieldCheck, Check, Truck, ArrowLeft, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
}

export function ProductDetailClient({ product }: Props) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [inscription, setInscription] = useState('');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, inscription.trim() || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isOutOfStock = product.stock <= 0;

  return (
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Black Layer Under Navbar */}
      <div className="bg-[#0A0708] text-white border-b border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/store"
            className="inline-flex items-center space-x-2 text-sm text-neutral-300 hover:text-white font-medium transition"
          >
            <ArrowLeft className="w-4 h-4 text-[#C8102E]" />
            <span>Back to Memorabilia Store</span>
          </Link>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold hidden sm:inline-block">
            Official Christian Okoye Archive
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Gallery Col */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-[#EAE5DE] shadow-xs">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {product.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#C8102E] text-white text-xs font-black uppercase tracking-wider rounded-md shadow-md">
                  Featured Legend Item
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                      selectedImage === idx
                        ? 'border-[#C8102E] scale-105 shadow-sm'
                        : 'border-[#EAE5DE] opacity-70 hover:opacity-100 bg-white'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Authenticity Guarantee Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAE5DE] shadow-xs space-y-3 mt-8">
              <div className="flex items-center space-x-3 text-emerald-700 font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <span>Christian Okoye Authenticity Guarantee</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                This item is guaranteed 100% authentic and personally signed by Christian Okoye. Each autograph includes a serial-numbered, tamper-evident hologram and matching Certificate of Authenticity.
              </p>
            </div>
          </div>

          {/* Details Col */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C8102E] font-bold">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#161413] uppercase tracking-tight mt-1">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-3xl font-black text-[#161413]">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-stone-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                {product.compareAtPrice && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    Save {formatPrice(product.compareAtPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Details Bullet Points */}
            <div className="space-y-2 py-3 border-y border-[#EAE5DE]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Item Specifications
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Inscription option */}
            {product.allowInscription && (
              <div className="space-y-2 p-4 rounded-xl bg-white border border-[#EAE5DE] shadow-xs">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Request Custom Personalization (Optional)
                </label>
                <input
                  type="text"
                  placeholder='e.g., "To Marcus - The Nigerian Nightmare"'
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EAE5DE] rounded-lg text-sm text-[#161413] placeholder-stone-400 focus:outline-hidden focus:border-[#C8102E] focus:bg-white transition"
                />
                <p className="text-[11px] text-stone-500">
                  Christian will handwrite your name or custom message along with his signature.
                </p>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase font-bold text-stone-500">Quantity:</span>
                <div className="flex items-center border border-[#EAE5DE] rounded-lg bg-white shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-stone-600 hover:text-[#161413] font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#161413]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-1 text-stone-600 hover:text-[#161413] font-bold"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                {isLowStock && (
                  <span className="text-xs text-[#C8102E] font-semibold">
                    Only {product.stock} items left in stock
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-2 transition shadow-lg ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : isOutOfStock
                    ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-[#C8102E] hover:bg-[#A60D24] text-white shadow-[#C8102E]/20 hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : isOutOfStock ? (
                  <span>Item Sold Out</span>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart ({formatPrice(product.price * quantity)})</span>
                  </>
                )}
              </button>
            </div>

            {/* Shipping note */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-stone-500">
              <Truck className="w-4 h-4 text-stone-400" />
              <span>Ships securely packaged and fully insured within 3-5 business days.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
