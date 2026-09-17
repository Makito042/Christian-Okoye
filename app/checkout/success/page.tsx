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
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Black Layer Under Navbar */}
      <div className="bg-[#0A0708] text-white border-b border-neutral-900 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Order Confirmation
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
            Order Successfully Placed
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#161413]">
            Thank You For Your Order!
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Your payment has been received and processed securely via Stripe. A detailed receipt and order confirmation has been emailed to you.
          </p>
        </div>

        {/* Order Status details */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DE] shadow-sm text-left space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#161413] border-b border-[#EAE5DE] pb-3">
            What Happens Next?
          </h3>

          <div className="space-y-4 text-xs text-stone-600">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <strong className="text-[#161413]">Authenticity Hologram Assigned:</strong> Your signed memorabilia is verified against Christian Okoye&apos;s serial-numbered archive and matched with its Certificate of Authenticity.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <PackageCheck className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <strong className="text-[#161413]">Packaging &amp; Protection:</strong> Items are placed in archival protective sleeves or reinforced containers to prevent bending and moisture damage.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Truck className="w-5 h-5 text-[#C8102E] mt-0.5 shrink-0" />
              <div>
                <strong className="text-[#161413]">Insured Shipping:</strong> Tracking details will be automatically emailed to you as soon as your package departs.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C8102E] hover:bg-[#A60D24] text-white font-bold rounded-xl text-sm transition shadow-md shadow-[#C8102E]/20"
          >
            Return to Homepage
          </Link>
          <Link
            href="/store"
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-800 font-bold rounded-xl text-sm border border-[#EAE5DE] transition shadow-xs"
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
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] text-[#161413] flex items-center justify-center">Loading confirmation...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
