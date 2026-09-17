import React from 'react';
import Link from 'next/link';
import { Users, Calendar, ArrowRight } from 'lucide-react';

export function FoundationBanner() {
  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200 text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text details */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
                The Christian Okoye Foundation
              </h2>

              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
                Founded by Christian Okoye to empower underprivileged youth in California and Nigeria. Through free athletic camps, academic scholarships, and mentorship programs, we provide young boys and girls the skills, discipline, and inspiration to achieve their dreams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <Users className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-black text-sm">Youth Athletic Clinics</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Free speed, agility, and football camps instructed by NFL alumni.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <Calendar className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-black text-sm">Annual Celebrity Golf Classic</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Bringing together sports celebrities and community leaders for youth fundraising.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              <Link
                href="/foundation"
                className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-center transition flex items-center justify-center space-x-2 shadow-lg shadow-red-600/30"
              >
                <span>Learn About Foundation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/events"
                className="w-full py-3.5 px-6 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl text-center transition shadow-md"
              >
                Celebrity Golf Tournament
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
