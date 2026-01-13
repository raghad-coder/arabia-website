import React from 'react';
import SaudiArabia from '../assets/SaudiArabia.jfif';
import { motion } from 'framer-motion';


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
          <span className="font-italic-playfair text-enso-green">Transformative</span> <br />
          Experiences
        </motion.h1>

        {/* تحريك الأزرار */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3 bg-enso-green text-white rounded-full font-medium hover:bg-white hover:text-enso-green transition-all duration-300 w-48">
            Contact Us
          </button>
          <button className="px-8 py-3 border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-48">
            Our Profile
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;