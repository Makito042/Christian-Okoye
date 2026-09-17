import React from 'react';
import Link from 'next/link';
import { XCircle, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="bg-black text-white min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
          <XCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-tight">Checkout Canceled</h1>
          <p className="text-sm text-neutral-400">
            Your card was not charged. Your items are still saved in your cart whenever you are ready.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/store"
            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition"
          >
            Return to Store
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl text-sm transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
