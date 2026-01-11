import React from 'react';

const Stats = () => {
  // وضع البيانات في مصفوفة يسهل علينا تغيير الأرقام لاحقاً دون تعديل الـ HTML
  const statsData = [
    { number: "30+", label: "years of experience" },
    { number: "999,013+", label: "Attendees" },
    { number: "10+", label: "Global destinations" },
    { number: "13+", label: "Regions in KSA" },
    { number: "15,000+", label: "High-level executives" },
    { number: "441+", label: "Events organized" },
  ];

  return (
    <section className="bg-enso-green py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* العنوان الرئيسي للقسم */}
        <h2 className="text-white text-4xl font-bold mb-16 flex items-center gap-2">
          enso <span className="font-light italic">in numbers</span>
        </h2>

        {/* شبكة الأرقام (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col border-l border-white/20 pl-6">
              <span className="text-white text-5xl md:text-6xl font-extrabold mb-2">
                {item.number}
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