import React from 'react';
import { motion } from 'framer-motion';
import CountUpNumber from './CountUpNumber';
import SplitText from './SplitText';
import { TiltCard } from './MotionWrappers';
import { Users, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export default function MetricsSection() {
  const stats = [
    {
      value: 5000,
      suffix: '+',
      label: 'PATIENTS RECOVERED',
      desc: 'Dedicated clinical recoveries across female pelvic care, spine, joint, and neuro rehabilitation in Varanasi.',
      tag: 'Clinical Recovery',
      Icon: Users,
    },
    {
      value: 7,
      suffix: '+ Yrs',
      label: 'CLINICAL EXPERTISE',
      desc: 'Led personally by Dr. Neha Gupta (B.P.T, M.P.T Orthopaedics, MIAP) with specialist clinical practice.',
      tag: 'Dr. Neha Gupta',
      Icon: Award,
    },
    {
      value: 99.4,
      suffix: '%',
      decimals: 1,
      label: 'PATIENT SATISFACTION',
      desc: 'Consistently high satisfaction based on verified patient feedback and long-term functional mobility.',
      tag: 'Verified Outcomes',
      Icon: HeartPulse,
    },
    {
      value: 100,
      suffix: '%',
      label: 'EVIDENCE-BASED CARE',
      desc: 'Personalized non-surgical physical therapy protocols, gentle manual release, and active clinical rehabilitation.',
      tag: 'Standard of Care',
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-t border-b border-[#D8D0C3] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
            CLINICAL BENCHMARKS & OUTCOMES
          </span>
          <SplitText
            text="Numbers That Reflect Our Care."
            as="h2"
            className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4 block"
          />
          <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
            Delivering dedicated healthcare excellence in Pandeypur, Varanasi through evidence-led therapy protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {stats.map((stat, i) => (
            <TiltCard key={i} maxTilt={8} scale={1.03} className="h-full">
              <div className="bg-[#F4EFE6] p-6 sm:p-7 xl:p-8 rounded-[26px] border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_10px_30px_rgba(41,50,37,0.06)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.25)] transition-all duration-500 flex flex-col justify-between h-full group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#293225] text-[#B89A5A] flex items-center justify-center shadow-md group-hover:bg-[#B89A5A] group-hover:text-[#293225] transition-colors duration-300">
                      <stat.Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#5F6B45] bg-[#E8ECDF] px-3 py-1 rounded-full border border-[#5F6B45]/30">
                      {stat.tag}
                    </span>
                  </div>

                  <div className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                    <CountUpNumber
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>

                  <h3 className="text-xs uppercase tracking-[0.16em] font-bold text-[#5F6B45] mb-2 leading-snug">
                    {stat.label}
                  </h3>

                  <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D8D0C3] flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-[#5F6B45]">
                  <span>Pandeypur, Varanasi</span>
                  <span className="text-[#B89A5A] font-bold">Verified Practice</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
