import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  // عداد وهمي سريع يعطي انطباعاً بأن الموقع يقرأ البيانات
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15); // سرعة العداد
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }} 
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-enso-dark flex flex-col items-center justify-center"
    >
      <div className="relative flex items-center justify-center">
        {/* الحلقة الخارجية: متقطعة وتدور ببطء */}
        <motion.svg width="180" height="180" className="absolute">
          <circle
            cx="90" cy="90" r="80"
            stroke="rgba(0, 168, 89, 0.1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 20"
          />
        </motion.svg>

        {/* الحلقة الأساسية: تتحرك بنظام الـ Draw */}
        <svg width="180" height="180" className="rotate-[-90deg]">
          <motion.circle
            cx="90" cy="90" r="80"
            stroke="#00a859"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: progress / 100, // يترسم مع العداد
              filter: "drop-shadow(0 0 8px #00a859)"
            }}
          />
        </svg>

        {/* العداد الرقمي في المنتصف */}
        <div className="absolute flex flex-col items-center">
          <motion.span 
            className="text-white text-4xl font-black tracking-tighter"
            style={{ fontFamily: 'Montserrat' }}
          >
            {progress}%
          </motion.span>
          <div className="w-8 h-[1px] bg-enso-green/50 mt-1 shadow-[0_0_10px_#00a859]"></div>
        </div>
      </div>

      {/* نص سفلي تفاعلي */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 text-enso-green text-[10px] uppercase tracking-[0.8em] font-bold"
      >
        Initializing Studio
      </motion.div>
    </motion.div>
  );
};

export default Loading;