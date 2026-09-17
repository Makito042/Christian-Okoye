'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to start checkout');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setErrorMessage(err.message || 'Error processing checkout. Please check Stripe configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-900 border-l border-neutral-800 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold tracking-tight">Your Cart ({totalItems})</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400 py-12">
                <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Your cart is empty</h3>
                <p className="text-sm text-neutral-400 max-w-xs mb-6">
                  Explore authentic signed memorabilia, jerseys, and tickets from Christian Okoye.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
                >
                  Browse Memorabilia
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.inscription || ''}`}
                  className="flex gap-4 p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/80"
                >
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-neutral-800">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white line-clamp-2">
                      {item.product.name}
                    </h4>
                    {item.inscription && (
                      <p className="text-xs text-amber-400/90 mt-0.5 italic">
                        &quot;{item.inscription}&quot;
                      </p>
                    )}
                    <p className="text-sm font-bold text-amber-500 mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-neutral-700 rounded-md bg-neutral-900">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-neutral-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-neutral-400 hover:text-white"
                          disabled={item.quantity >= item.product.stock}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-500 hover:text-red-400 transition p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800">
                  <span>Total</span>
                  <span className="text-amber-500 text-lg">{formatPrice(subtotal)}</span>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs bg-red-900/30 border border-red-700/60 rounded-lg text-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-[0.99] text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-lg shadow-red-900/30 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Preparing Secure Checkout...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Stripe Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-neutral-400 text-center">
                <div className="flex items-center justify-center space-x-1.5 py-1 bg-neutral-900 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Certified Authentic</span>
                </div>
                <div className="flex items-center justify-center space-x-1.5 py-1 bg-neutral-900 rounded-md">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Insured Express Shipping</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
