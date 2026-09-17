import React from 'react';
import Link from 'next/link';
import { Users, Award, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Christian Okoye Foundation | 501(c)(3) Non-Profit",
  description: "Dedicated to helping underprivileged youth achieve their full athletic and academic potential through sports clinics, scholarships, and mentoring.",
};

export default function FoundationPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#161413] min-h-screen">
      {/* Hero - Black Layer Under Navbar */}
      <section className="py-20 bg-[#0A0708] text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            The Christian Okoye Foundation
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Empowering youth through athletics, education, and character development. Giving back to the communities that welcomed Christian with open arms.
          </p>
        </div>
      </section>

      {/* Mission & Core Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#EAE5DE] shadow-xs space-y-4 hover:border-[#C8102E] transition">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#C8102E]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-[#161413]">Youth Sports Clinics</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              Providing free football, track, and fitness camps for young athletes who lack access to expensive private training or club sports.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#EAE5DE] shadow-xs space-y-4 hover:border-[#C8102E] transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-[#161413]">Academic Scholarships</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              Awarding college scholarships to promising student-athletes who demonstrate exceptional community leadership, discipline, and academic resilience.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#EAE5DE] shadow-xs space-y-4 hover:border-[#C8102E] transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-[#161413]">Character &amp; Mentorship</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              Teaching young people life lessons in perseverance, teamwork, sportsmanship, and making constructive choices on and off the playing field.
            </p>
          </div>
        </div>

        {/* Founder Letter */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE5DE] shadow-lg space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#161413] tracking-wide">
            A Message from Christian Okoye
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              &quot;When I came to the United States in 1982 from Nigeria, I had very little beyond my work ethic, track shoes, and a dream. The coaches, mentors, and community at Azusa Pacific and later in Kansas City took me in and changed my life forever.&quot;
            </p>
            <p>
              &quot;I created this foundation so that no young boy or girl is ever turned away from sports, fitness, or an education simply because their family cannot afford the fees or equipment. Every child deserves mentors who believe in them.&quot;
            </p>
          </div>
          <div className="pt-2 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-black text-white text-lg shadow-sm">
              35
            </div>
            <div>
              <p className="text-[#161413] font-bold">Christian Okoye</p>
              <p className="text-xs text-[#C8102E] font-semibold uppercase">Founder &amp; President</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
