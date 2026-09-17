import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Shield, ArrowRight, Target, Flame } from 'lucide-react';
import { CAREER_TIMELINE } from '@/data/career';

export const metadata = {
  title: "About Christian Okoye | Kansas City Chiefs Legend #35",
  description: "Learn about the life, collegiate dominance at Azusa Pacific, NFL rushing championship with the Kansas City Chiefs, and post-football philanthropic work of Christian Okoye.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">
              The Making of a <br />
              <span className="text-red-500">Nightmare</span>
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed pt-2">
              From Enugu, Nigeria to dominating Arrowhead Stadium as the 1989 NFL Rushing Champion. The true story of the most imposing fullback in football history.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-neutral-300 text-base sm:text-lg leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide flex items-center space-x-2">
                <Flame className="w-6 h-6 text-red-500" />
                <span>The Unlikely Journey to America</span>
              </h2>
              <p>
                Born in Enugu, Nigeria, Christian Okoye didn&apos;t play American football until he was 23 years old. A world-class track and field athlete, he arrived in Southern California in 1982 to compete at Azusa Pacific University on a collegiate track scholarship.
              </p>
              <p>
                Standing 6-foot-1 and weighing a muscular 260 pounds while clocking a blistering 4.45 40-yard dash, Okoye dominated the collegiate discus, shot put, and hammer throw before Azusa Pacific football coaches convinced him to try out the gridiron.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-3">
              <h3 className="text-lg font-bold text-amber-400 flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Collegiate Accolades</span>
              </h3>
              <p className="text-sm text-neutral-300">
                At Azusa Pacific, Christian rushed for 3,572 yards and 43 touchdowns across just 32 games, earning NAIA All-American honors and proving that his physical tools were ready for the biggest stage.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                Chiefs Greatness &amp; The 1989 Title
              </h2>
              <p>
                Selected by the Kansas City Chiefs in the 2nd round of the 1987 NFL Draft, Christian became an immediate powerhouse. By 1989, head coach Marty Schottenheimer made Okoye the focal point of the Chiefs offensive assault.
              </p>
              <p>
                In 1989, Christian led the entire NFL with <strong>1,480 rushing yards</strong> on 370 carries and scored 12 touchdowns. He received First-Team All-Pro honors, won the UPI AFC Offensive Player of the Year, and earned his first of two Pro Bowl trips.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                Induction into the Chiefs Hall of Fame
              </h2>
              <p>
                Over his 6-year NFL career, Christian amassed 4,897 rushing yards and 40 touchdowns. In the year 2000, the Kansas City Chiefs formally inducted Christian Okoye into the <strong>Chiefs Hall of Fame</strong> and enshrined his name at Arrowhead Stadium.
              </p>
            </div>
          </div>

          {/* Right Sticky Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-950">
                <img
                  src="/images/christian-okoye-2.jpg"
                  alt="Christian Okoye"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Chiefs Enshrinement
                  </span>
                  <p className="text-sm font-black text-white">Christian Okoye #35</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <h3 className="text-xl font-black uppercase text-white tracking-wider border-b border-neutral-800 pb-3">
                  Career Profile
                </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Position</span>
                  <span className="font-bold text-white">Fullback / Running Back</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Jersey Number</span>
                  <span className="font-bold text-red-500">#35 (Chiefs)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">NFL Draft</span>
                  <span className="font-bold text-white">1987 / Round 2 / Pick 35</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Height / Weight</span>
                  <span className="font-bold text-white">6&apos;1&quot; / 260 lbs</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">College</span>
                  <span className="font-bold text-white">Azusa Pacific University</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Hometown</span>
                  <span className="font-bold text-white">Enugu, Nigeria</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/store"
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition text-sm shadow-md shadow-red-900/30"
                >
                  <span>Shop Authentic Autographs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Foundation Plug */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <h4 className="text-base font-bold text-amber-400">Life After Football</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Today, Christian directs the Christian Okoye Foundation, running free youth athletic clinics and hosting the annual Celebrity Golf Classic to fund youth education.
              </p>
              <Link
                href="/foundation"
                className="text-xs font-bold text-white hover:text-amber-400 inline-flex items-center space-x-1"
              >
                <span>Discover Foundation Programs</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
