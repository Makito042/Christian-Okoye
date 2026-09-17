import React from 'react';
import Link from 'next/link';
import { XCircle, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Black Layer Under Navbar */}
      <div className="bg-[#0A0708] text-white border-b border-neutral-900 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Order Status
        </h1>
      </div>

      <div className="py-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE5DE] shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
            <XCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#161413]">Checkout Canceled</h2>
            <p className="text-sm text-stone-600">
              Your card was not charged. Your items are still saved in your cart whenever you are ready.
            </p>
          </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/store"
            className="w-full sm:w-auto px-6 py-3 bg-[#C8102E] hover:bg-[#A60D24] text-white font-bold rounded-xl text-sm transition shadow-md shadow-[#C8102E]/20"
          >
            Return to Store
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-sm border border-[#EAE5DE] transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
