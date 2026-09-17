'use client';

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ShieldCheck, ArrowRight, PackageCheck, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function SuccessContent() {
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear shopping cart on successful checkout completion
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-black text-white min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Order Successfully Placed
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Thank You For Your Order!
          </h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Your payment has been received and processed securely via Stripe. A detailed receipt and order confirmation has been emailed to you.
          </p>
        </div>

        {/* Order Status details */}
        <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-3">
            What Happens Next?
          </h3>

          <div className="space-y-3 text-xs text-neutral-300">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Authenticity Hologram Assigned:</strong> Your signed memorabilia is verified against Christian Okoye&apos;s serial-numbered archive and matched with its Certificate of Authenticity.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <PackageCheck className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Packaging &amp; Protection:</strong> Items are placed in archival protective sleeves or reinforced containers to prevent bending and moisture damage.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Truck className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Insured Shipping:</strong> Tracking details will be automatically emailed to you as soon as your package departs.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition"
          >
            Return to Homepage
          </Link>
          <Link
            href="/store"
            className="w-full sm:w-auto px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold rounded-xl text-sm transition"
          >
            Continue Browsing Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading confirmation...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
