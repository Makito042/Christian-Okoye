import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0708] text-white pt-12 pb-16 lg:pt-16 lg:pb-24 min-h-[680px] flex items-center border-b border-neutral-900">
      {/* Background Stadium Graphic with Floodlights & Red Smoke */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/30c54d6b-a5f2-47df-ab02-a8d4796aba73.png"
          alt="Christian Okoye - The Nigerian Nightmare"
          className="w-full h-full object-cover object-top select-none"
        />

        {/* Subtle Dark Vignette & Legibility Overlays */}
        {/* Soft left shade for crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Bottom smooth fade to bridge with following sections */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0A0708] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Giant Headline: CHRISTIAN (White) OKOYE (Chiefs Red) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white drop-shadow-md">
              Christian <br />
              <span className="text-[#E31837]">Okoye</span>
            </h1>

            {/* Moniker Tag */}
            <div>
              <span className="inline-block bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-md text-sm sm:text-base font-black uppercase tracking-wider border border-white/10 shadow-md">
                &quot;The Nigerian Nightmare&quot;
              </span>
            </div>

            {/* Subtext Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
              1989 NFL Rushing Champion, 2x Pro Bowl powerhouse, and Kansas City Chiefs Hall of Fame inductee. Browse official hand-signed memorabilia, foundation charity events, and speaking booking inquiries.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                href="/store"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#E31837] hover:bg-[#C8102E] text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-lg shadow-[#E31837]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Shop Signed Memorabilia</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-black/80 hover:bg-black text-white font-bold rounded-xl border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 transition backdrop-blur-sm"
              >
                <span>Book Appearances</span>
              </Link>
            </div>

            {/* Stats Bar (Unified Frosted Glass Container with Vertical Dividers) */}
            <div className="pt-4">
              <div className="inline-flex w-full sm:w-auto max-w-lg bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl divide-x divide-white/15">
                {/* Stat 1 */}
                <div className="flex-1 px-3 sm:px-5 first:pl-1 text-left">
                  <p className="text-2xl sm:text-3xl font-black text-[#E31837] leading-none">1,480</p>
                  <p className="text-[10px] sm:text-[11px] uppercase text-white/70 font-bold tracking-wider mt-1.5">
                    1989 NFL Rushing Title
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="flex-1 px-3 sm:px-5 text-left">
                  <p className="text-2xl sm:text-3xl font-black text-white leading-none">4,897</p>
                  <p className="text-[10px] sm:text-[11px] uppercase text-white/70 font-bold tracking-wider mt-1.5">
                    Career Rushing Yds
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="flex-1 px-3 sm:px-5 last:pr-1 text-left">
                  <p className="text-2xl sm:text-3xl font-black text-[#FFB81C] leading-none">2000</p>
                  <p className="text-[10px] sm:text-[11px] uppercase text-white/70 font-bold tracking-wider mt-1.5">
                    Chiefs Hall of Fame
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Dark Card with Christian Okoye Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] rounded-3xl overflow-hidden bg-neutral-950 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group transition duration-300 hover:border-white/40">
              {/* Photo of Christian Okoye - Full Portrait visible */}
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <img
                  src="/images/images.jpg"
                  alt="Christian Okoye - Kansas City Chiefs Hall of Fame"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                />

                {/* Smooth dark gradient overlay at bottom so the whole photo is seen while text remains crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-45% to-transparent pointer-events-none" />

                {/* Text and details floating over the bottom of the card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-2.5 z-10">
                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-wide leading-snug drop-shadow-md">
                    The Most Feared Fullback in Football
                  </h3>

                  {/* Subtext */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal drop-shadow-sm">
                    Electrifying Arrowhead Stadium with bruising power runs, punishing stiff-arms, and unstoppable goal-line scoring.
                  </p>

                  {/* Story Link */}
                  <div className="pt-1">
                    <Link
                      href="/about"
                      className="text-xs sm:text-sm font-bold text-[#FFB81C] hover:text-[#FFC72C] inline-flex items-center space-x-1.5 transition group/link"
                    >
                      <span>Read Christian&apos;s Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
