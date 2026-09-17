import React from 'react';
import Link from 'next/link';
import { Users, Award, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Christian Okoye Foundation | 501(c)(3) Non-Profit",
  description: "Dedicated to helping underprivileged youth achieve their full athletic and academic potential through sports clinics, scholarships, and mentoring.",
};

export default function FoundationPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-radial from-neutral-900 via-neutral-950 to-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            The Christian Okoye Foundation
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Empowering youth through athletics, education, and character development. Giving back to the communities that welcomed Christian with open arms.
          </p>
        </div>
      </section>

      {/* Mission & Core Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4 hover:border-neutral-700 transition">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Youth Sports Clinics</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Providing free football, track, and fitness camps for young athletes who lack access to expensive private training or club sports.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4 hover:border-neutral-700 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Academic Scholarships</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Awarding college scholarships to promising student-athletes who demonstrate exceptional community leadership, discipline, and academic resilience.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4 hover:border-neutral-700 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Character &amp; Mentorship</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Teaching young people life lessons in perseverance, teamwork, sportsmanship, and making constructive choices on and off the playing field.
            </p>
          </div>
        </div>

        {/* Founder Letter */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
            A Message from Christian Okoye
          </h2>
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              &quot;When I came to the United States in 1982 from Nigeria, I had very little beyond my work ethic, track shoes, and a dream. The coaches, mentors, and community at Azusa Pacific and later in Kansas City took me in and changed my life forever.&quot;
            </p>
            <p>
              &quot;I created this foundation so that no young boy or girl is ever turned away from sports, fitness, or an education simply because their family cannot afford the fees or equipment. Every child deserves mentors who believe in them.&quot;
            </p>
          </div>
          <div className="pt-2 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-black text-white text-lg">
              35
            </div>
            <div>
              <p className="text-white font-bold">Christian Okoye</p>
              <p className="text-xs text-amber-500 font-semibold uppercase">Founder &amp; President</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
