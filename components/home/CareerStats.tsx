import { CAREER_STATS, CAREER_TIMELINE } from '@/data/career';
import { CheckCircle, Flame } from 'lucide-react';

export function CareerStats() {
  return (
    <section className="py-24 bg-[#FAF8F5] text-[#161413] relative border-b border-[#EAE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#161413]">
            Dominance in Red &amp; Gold
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-medium">
            A career marked by historic milestones, leading the NFL in rushing and cementing a permanent spot among Arrowhead&apos;s greatest legends.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {CAREER_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[#EAE5DE] text-center hover:border-[#C8102E] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(200,16,46,0.1)] group hover:-translate-y-1"
            >
              <p className="text-4xl lg:text-5xl font-black text-[#161413] group-hover:text-[#C8102E] transition">
                {stat.value}
              </p>
              <p className="text-sm font-black text-stone-900 mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black uppercase tracking-wider text-center mb-12 text-[#161413] flex items-center justify-center space-x-2">
            <Flame className="w-5 h-5 text-[#C8102E]" />
            <span>Milestones in the Legend</span>
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#EAE5DE]">
            {CAREER_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-center justify-between md:justify-normal ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C8102E] border-4 border-white shadow-md z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] p-6 bg-white border border-[#EAE5DE] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8102E] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(200,16,46,0.08)] ${
                      isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <span className="text-xs font-black text-[#C8102E] uppercase tracking-widest block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-black text-[#161413] mb-2">{item.title}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
