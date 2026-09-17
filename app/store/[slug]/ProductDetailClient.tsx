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
    <div className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back breadcrumb */}
        <Link
          href="/store"
          className="inline-flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Memorabilia Store</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Gallery Col */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {product.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-md">
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
                        ? 'border-red-600 scale-105'
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Authenticity Guarantee Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 mt-8">
              <div className="flex items-center space-x-3 text-emerald-400 font-bold">
                <ShieldCheck className="w-6 h-6" />
                <span>Christian Okoye Authenticity Guarantee</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                This item is guaranteed 100% authentic and personally signed by Christian Okoye. Each autograph includes a serial-numbered, tamper-evident hologram and matching Certificate of Authenticity.
              </p>
            </div>
          </div>

          {/* Details Col */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-3xl font-black text-white">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-neutral-500 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                {product.compareAtPrice && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                    Save {formatPrice(product.compareAtPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {product.description}
            </p>

            {/* Details Bullet Points */}
            <div className="space-y-2 py-3 border-y border-neutral-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Item Specifications
              </h3>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Inscription option */}
            {product.allowInscription && (
              <div className="space-y-2 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Request Custom Personalization (Optional)
                </label>
                <input
                  type="text"
                  placeholder='e.g., "To Marcus - The Nigerian Nightmare"'
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 bg-black border border-neutral-700 rounded-lg text-sm text-white focus:outline-hidden focus:border-amber-500 transition"
                />
                <p className="text-[11px] text-neutral-400">
                  Christian will handwrite your name or custom message along with his signature.
                </p>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase font-bold text-neutral-400">Quantity:</span>
                <div className="flex items-center border border-neutral-700 rounded-lg bg-neutral-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-neutral-300 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-1 text-neutral-300 hover:text-white"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                {isLowStock && (
                  <span className="text-xs text-amber-400 font-semibold">
                    Only {product.stock} items left in stock
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-2 transition shadow-xl ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : isOutOfStock
                    ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-red-900/30'
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
            <div className="pt-2 flex items-center space-x-2 text-xs text-neutral-400">
              <Truck className="w-4 h-4 text-neutral-500" />
              <span>Ships securely packaged and fully insured within 3-5 business days.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
