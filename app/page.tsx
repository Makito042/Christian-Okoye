import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';
import { CareerStats } from '@/components/home/CareerStats';
import { FoundationBanner } from '@/components/home/FoundationBanner';
import { ProductCard } from '@/components/store/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Memorabilia Store Section */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EAE5DE] text-[#161413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#161413] tracking-tight">
                Authentic Signed Memorabilia
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-1.5 font-medium">
                Personally hand-signed by Christian Okoye. Each item includes a tamper-evident holographic COA.
              </p>
            </div>

            <Link
              href="/store"
              className="inline-flex items-center space-x-2 text-sm font-black text-[#C8102E] hover:text-[#A80C26] transition shrink-0"
            >
              <span>View All Memorabilia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-white border border-[#EAE5DE] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F1EB] border border-[#EAE5DE] flex items-center justify-center text-[#C8102E] shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-black text-[#161413]">Need a Custom Inscription?</h4>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5 font-medium">
                  You can personalize any jersey, photo, or football with your name or special message during checkout.
                </p>
              </div>
            </div>

            <Link
              href="/store"
              className="px-6 py-3.5 bg-[#161413] hover:bg-black text-[#FAF8F5] font-black text-sm rounded-xl transition shrink-0 shadow-md"
            >
              Explore Store Options
            </Link>
          </div>
        </div>
      </section>

      {/* Career Stats & Milestones */}
      <CareerStats />

      {/* Iconic Moments & Photos Showcase */}
      <section className="relative py-24 border-t border-[#EAE5DE] text-[#161413] overflow-hidden">
        {/* Chiefs Kingdom #35 Sketch Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/11f931eb-402d-452f-a096-e326df874d98.png"
            alt="Christian Okoye Chiefs Kingdom #35 Legend Background"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
          {/* Subtle translucent wash to let the sketch art show through while keeping text and cards legible */}
          <div className="absolute inset-0 bg-[#FAF8F5]/65 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#161413] tracking-tight">
              The Legend Through the Years
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-medium">
              From historic game-winning drives at Arrowhead Stadium to community leadership across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAE5DE] hover:border-[#C8102E] transition-all duration-300 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(200,16,46,0.12)] hover:-translate-y-1">
              <div className="relative aspect-4/5 overflow-hidden bg-[#F5F1EB]">
                <img
                  src="/images/christian-okoye-1.jpg"
                  alt="Christian Okoye - The Nigerian Nightmare"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161413] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#C8102E] px-2.5 py-1 rounded-md shadow-sm">
                    Arrowhead Icon
                  </span>
                  <h3 className="text-lg font-black text-white mt-2">
                    The Nigerian Nightmare
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                  Dominating defenses with an unmatched combination of 260-pound power and 4.45 track speed.
                </p>
                <Link
                  href="/about"
                  className="mt-5 text-xs font-black text-[#C8102E] hover:text-[#A80C26] inline-flex items-center space-x-1"
                >
                  <span>Explore Career Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAE5DE] hover:border-[#C8102E] transition-all duration-300 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(200,16,46,0.12)] hover:-translate-y-1">
              <div className="relative aspect-4/5 overflow-hidden bg-[#F5F1EB]">
                <img
                  src="/images/christian-okoye-2.jpg"
                  alt="Christian Okoye Kansas City Chiefs Enshrinement"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161413] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#161413] bg-amber-400 px-2.5 py-1 rounded-md shadow-sm">
                    Hall of Fame
                  </span>
                  <h3 className="text-lg font-black text-white mt-2">
                    Chiefs Enshrinement
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                  Honored permanently on the Arrowhead Stadium Ring of Honor as one of Kansas City&apos;s all-time greats.
                </p>
                <Link
                  href="/store"
                  className="mt-5 text-xs font-black text-[#C8102E] hover:text-[#A80C26] inline-flex items-center space-x-1"
                >
                  <span>Shop Autographed Gear</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAE5DE] hover:border-[#C8102E] transition-all duration-300 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(200,16,46,0.12)] hover:-translate-y-1">
              <div className="relative aspect-4/5 overflow-hidden bg-[#F5F1EB]">
                <img
                  src="/images/christian-okoye-3.jpg"
                  alt="Christian Okoye Community Leadership"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161413] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-emerald-600 px-2.5 py-1 rounded-md shadow-sm">
                    Community &amp; Foundation
                  </span>
                  <h3 className="text-lg font-black text-white mt-2">
                    Inspiring the Next Generation
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                  Mentoring underprivileged youth through free athletic camps and academic scholarships.
                </p>
                <Link
                  href="/foundation"
                  className="mt-5 text-xs font-black text-[#C8102E] hover:text-[#A80C26] inline-flex items-center space-x-1"
                >
                  <span>Support the Foundation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Legend Banner - Deep Chiefs Crimson Red */}
      <section className="py-24 bg-gradient-to-r from-[#9B0A22] via-[#C8102E] to-[#9B0A22] text-white border-y border-[#8B091E] shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-6xl text-amber-300 font-serif leading-none block opacity-95">&ldquo;</span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight italic -mt-6 text-white leading-tight">
            When Christian Okoye hit the line of scrimmage, Arrowhead Stadium shook. You didn&apos;t just tackle him; you survived him.
          </blockquote>
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-200 pt-3">
            — NFL Films Legacy Vault
          </p>
        </div>
      </section>

      {/* Foundation Banner */}
      <FoundationBanner />
    </div>
  );
}
