import React from "react";
import SaudiArabia from "../assets/SaudiArabia.jfif";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. الخلفية: فيديو أو صورة مع طبقة تعتيم (Overlay) */}
      <div className="absolute inset-0 z-0">
        {/* سنضع صورة مؤقتة حالياً، ويمكنك استبدالها بفيديو لاحقاً */}
        <img
          src={SaudiArabia}
          alt="Saudi Arabia Backdrop"
          className="w-full h-full object-cover"
        />
        {/* طبقة التعتيم لجعل النص مقروءاً ولإعطاء الفخامة */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-enso-dark/40 to-enso-dark"></div>
      </div>
      
      {/* نصوص تظهر فجأة وتختفي مع حركة الفيديو - الماجيك */}
     {/*<motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        className="absolute top-1/4 left-1/4 pointer-events-none"
      >
        <span className="text-enso-green/40 text-4xl font-black italic tracking-widest uppercase">
          Every Event Begins with an idea
        </span>
      </motion.div> */} 

      {/* 2. المحتوى النصي */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* تحريك النص الصغير */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-enso-green uppercase tracking-[0.3em] text-sm mb-4 font-medium"
        >
          Event Management Leader in KSA
        </motion.p>

        {/* تحريك العنوان الكبير */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" font-italic-playfair text-enso-green text-white text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          Creating <br />
          <span className="font-italic-playfair text-enso-green">
            Transformative
          </span>{" "}
          <br />
          Experiences
        </motion.h1>

        {/* تحريك الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* حاوية الأزرار: توزيع ذكي يمنع التداخل */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 mt-12 w-full px-6">
          
          {/* الزر الأول: Contact Us (أخضر يتحول لأسود/أبيض) */}
          <button className="group relative w-full md:w-auto min-w-[160px] px-8 py-3 bg-enso-green text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(0,168,89,0.5)]">
            <span className="relative z-10">Contact Us</span>
          </button>
          
          {/* الزر الثاني: Our Profile (شفاف بحدود بيضاء) */}
          <button className="group relative w-full md:w-auto min-w-[160px] px-8 py-3 border border-white/40 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            <span className="relative z-10">Our Profile</span>
          </button>

          {/* زر Watch (يظهر بجانبهم في اللابتوب وأسفلهم في الجوال) */}
          <button className="flex items-center gap-4 text-white hover:text-enso-green transition-all duration-300 mt-4 md:mt-0 md:ml-6 group">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Watch</span>
            <div className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center group-hover:border-enso-green group-hover:bg-enso-green/10 transition-all">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L0 11.1962L0 0.803848L10 6Z" fill="currentColor"/>
              </svg>
            </div>
          </button>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
