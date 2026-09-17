'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Trophy } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xl tracking-tighter shadow-md shadow-red-600/40 group-hover:scale-105 transition">
              35
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white block uppercase">
                Christian Okoye
              </span>
              <span className="text-[11px] uppercase tracking-widest text-red-500 font-black block -mt-1">
                The Nigerian Nightmare
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold">
            <Link
              href="/about"
              className="text-neutral-200 hover:text-red-500 transition hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/store"
              className="text-neutral-200 hover:text-red-500 transition hover:scale-105"
            >
              Store
            </Link>
            <Link
              href="/events"
              className="text-neutral-200 hover:text-red-500 transition hover:scale-105"
            >
              Events &amp; Golf
            </Link>
            <Link
              href="/foundation"
              className="text-neutral-200 hover:text-red-500 transition hover:scale-105"
            >
              Foundation
            </Link>
            <Link
              href="/contact"
              className="text-neutral-200 hover:text-red-500 transition hover:scale-105"
            >
              Appearances &amp; Booking
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition flex items-center"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-red-500" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-200 hover:text-white rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 space-y-2 bg-black/95 backdrop-blur-xl">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-neutral-200 hover:bg-white/10 hover:text-red-500"
            >
              About Christian
            </Link>
            <Link
              href="/store"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-neutral-200 hover:bg-white/10 hover:text-red-500"
            >
              Official Memorabilia Store
            </Link>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-neutral-200 hover:bg-white/10 hover:text-red-500"
            >
              Events &amp; Celebrity Golf
            </Link>
            <Link
              href="/foundation"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-neutral-200 hover:bg-white/10 hover:text-red-500"
            >
              Christian Okoye Foundation
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-neutral-200 hover:bg-white/10 hover:text-red-500"
            >
              Booking &amp; Speaking Inquiries
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
