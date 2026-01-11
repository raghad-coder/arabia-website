import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. الخلفية: فيديو أو صورة مع طبقة تعتيم (Overlay) */}
      <div className="absolute inset-0 z-0">
        {/* سنضع صورة مؤقتة حالياً، ويمكنك استبدالها بفيديو لاحقاً */}
        <img 
          src="https://images.unsplash.com/photo-1586724230411-44933923f790?q=80&w=2070&auto=format&fit=crop" 
          alt="Saudi Arabia Backdrop"
          className="w-full h-full object-cover"
        />
        {/* طبقة التعتيم لجعل النص مقروءاً ولإعطاء الفخامة */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-enso-dark/40 to-enso-dark"></div>
      </div>

      {/* 2. المحتوى النصي */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-enso-green uppercase tracking-[0.3em] text-sm mb-4 font-medium">
          Event Management Leader in KSA
        </p>
        
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
          Creating <br />
          <span className="italic font-light">Transformative</span> <br />
          Experiences
        </h1>

        {/* 3. أزرار الأكشن (Buttons) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-enso-green text-white rounded-full font-medium hover:bg-white hover:text-enso-green transition-all duration-300 w-48">
            Contact Us
          </button>
          <button className="px-8 py-3 border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-48">
            Our Profile
          </button>
        </div>
      </div>

      {/* 4. سهم التوجيه للأسفل (اختياري لجمال التصميم) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center py-2">
          <div className="w-1 h-2 bg-enso-green rounded-full"></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;