import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/store/ProductCard';

export const metadata = {
  title: "Events & Celebrity Golf Classic | Christian Okoye",
  description: "Join Christian Okoye and NFL legends at the Annual Celebrity Golf Classic and youth football camps benefiting the Christian Okoye Foundation.",
};

export default function EventsPage() {
  const eventProduct = PRODUCTS.find((p) => p.category === 'events');

  return (
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Banner - Black Layer Under Navbar */}
      <section className="py-20 bg-[#0A0708] text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Upcoming Events
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Experience championship golf alongside NFL Hall of Famers, Chiefs legends, and sports icons. All proceeds support underprivileged youth.
          </p>
        </div>
      </section>

      {/* Featured Main Event */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#EAE5DE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div
            className="lg:col-span-5 min-h-[320px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 text-xs font-black uppercase tracking-wider rounded-md">
                  Annual Signature Event
                </span>
                <span className="px-3 py-1 bg-red-50 border border-red-200 text-[#C8102E] text-xs font-bold uppercase rounded-md">
                  Tax-Deductible
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#161413]">
                The Annual Christian Okoye Celebrity Golf Classic
              </h2>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-medium">
                A premier 18-hole scramble tournament pairing everyday golf enthusiasts and corporate sponsors with NFL alumni, pro athletes, and Hollywood celebrities. Includes continental breakfast, on-course contests, silent auction, and post-round banquet dinner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 font-medium pt-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Summer 2026 Invitational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Goose Creek Golf Club, California</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Celebrity in every foursome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Benefits Youth Athletic Clinics</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE5DE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Entry Fee</p>
                <p className="text-2xl font-black text-[#161413]">$350.00 <span className="text-xs text-stone-500 font-normal">/ player</span></p>
              </div>

              {eventProduct && (
                <Link
                  href={`/store/${eventProduct.slug}`}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#161413] hover:bg-[#C8102E] text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-md"
                >
                  <span>Register &amp; Purchase Entry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Free Youth Camps Section */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-black uppercase text-[#161413] tracking-wide">
            Free Youth Football &amp; Speed Camps
          </h3>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed font-medium">
            The foundation provides free one-day youth clinics for kids ages 7-17, focusing on fundamental football skills, speed mechanics, discipline, and anti-bullying workshops.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#EAE5DE] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">Southern California</span>
              <h4 className="text-lg font-bold text-[#161413]">Inland Empire Youth Clinic</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Free non-contact football &amp; fitness camp with NFL guest coaches. T-shirts and lunch provided for all registered youth participants.
              </p>
              <div className="text-xs text-[#161413] font-bold pt-2">Admission: FREE (Registration Required)</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#EAE5DE] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">Midwest / Kansas City</span>
              <h4 className="text-lg font-bold text-[#161413]">Arrowhead Alumni Football Academy</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Special camp for inner-city youth in the Kansas City metropolitan area, providing sports mentorship and academic readiness guidance.
              </p>
              <div className="text-xs text-[#161413] font-bold pt-2">Admission: FREE (Sponsored by Foundation)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
