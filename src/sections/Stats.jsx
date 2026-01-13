import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  // هذا الـ Hook يخبرنا إذا كان القسم ظاهراً على الشاشة أم لا (inView)
  const { ref, inView } = useInView({
    triggerOnce: true, // العد يحدث مرة واحدة فقط عند أول ظهور
    threshold: 0.2,    // يبدأ العد عندما يظهر 20% من القسم
  });

  const statsData = [
    { number: 30, suffix: "+", label: "years of experience" },
    { number: 999013, suffix: "+", label: "Attendees" },
    { number: 10, suffix: "+", label: "Global destinations" },
    { number: 13, suffix: "+", label: "Regions in KSA" },
    { number: 15000, suffix: "+", label: "High-level executives" },
    { number: 441, suffix: "+", label: "Events organized" },
  ];

  return (
    // ربطنا الـ ref هنا ليعرف البرنامج متى نصل لهذا القسم
    <section ref={ref} className=" w-full bg-enso-green py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-16 flex items-center gap-2">
          enso <span className="font-light italic">in numbers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col border-l border-white/20 pl-6">
              <span className="text-white text-5xl md:text-6xl font-extrabold mb-2">
                {/* هنا نستخدم المكون CountUp */}
                {inView ? (
                  <CountUp 
                    end={item.number} 
                    duration={2.5} 
                    separator="," 
                    suffix={item.suffix} 
                  />
                ) : (
                  "0" // يظهر صفر حتى يدخل القسم في مجال الرؤية
                )}
              </span>
              <span className="text-white/80 uppercase text-sm tracking-widest font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;