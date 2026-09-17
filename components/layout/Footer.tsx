import React from 'react';
import Link from 'next/link';
import { Award, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-lg">
                35
              </div>
              <span className="text-xl font-black text-white tracking-wider uppercase">
                Christian Okoye
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Former Kansas City Chiefs Fullback, 1989 NFL Rushing Champion, 2x Pro Bowler, and Member of the Kansas City Chiefs Hall of Fame.
            </p>
            <div className="flex items-center space-x-3 text-amber-500 text-sm font-semibold">
              <Award className="w-4 h-4" />
              <span>Kansas City Chiefs Hall of Fame</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Christian
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition">
                  Official Memorabilia Store
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Celebrity Golf &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/foundation" className="hover:text-white transition">
                  Christian Okoye Foundation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Appearances &amp; Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Memorabilia Guarantee */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Store &amp; Authenticity</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every autographed item sold on this site is directly hand-signed by Christian Okoye and accompanied by a tamper-evident holographic Certificate of Authenticity (COA).
            </p>
            <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 text-xs text-neutral-300">
              Orders securely processed via <span className="font-semibold text-white">Stripe</span> with encrypted checkout.
            </div>
          </div>

          {/* Col 4: Booking & Newsletter */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Appearance Inquiries</h3>
            <p className="text-sm text-neutral-400">
              Available for keynote speaking, corporate events, autograph sessions, and youth football clinics.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition"
            >
              Request an Appearance
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Christian Okoye. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/store" className="hover:text-neutral-400">
              Memorabilia
            </Link>
            <Link href="/foundation" className="hover:text-neutral-400">
              501(c)(3) Foundation
            </Link>
            <Link href="/admin" className="hover:text-neutral-400">
              Store Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
