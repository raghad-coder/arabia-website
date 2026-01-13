import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../constants"; // استيراد البيانات

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  // أضفنا الاتجاه (Direction) لنعرف هل نتحرك يميناً أم يساراً
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100, // يبدأ من اليمين أو اليسار
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100, // يختفي في الاتجاه المعاكس
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-enso-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* الحاوية الأساسية للأنيميشن */}
        <div className="relative overflow-hidden min-h-[450px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              {/* العنوان وعلامات التنصيص تتحرك معاً كقطعة واحدة */}
              <div className="relative flex justify-center items-center mb-12 w-full">
                {/* علامة التنصيص اليسرى */}
                <svg
                  className="hidden md:block absolute left-0 w-16 h-16 text-enso-green/60"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M16 48C8 48 4 40 4 32C4 20 12 8 24 8V16C16 16 12 24 12 32H24V48H16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M48 48C40 48 36 40 36 32C36 20 44 8 56 8V16C48 16 44 24 44 32H56V48H48Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight uppercase px-12 md:px-24">
                  {TESTIMONIALS[current].title}
                </h2>

                {/* علامة التنصيص اليمنى */}
                <svg
                  className="hidden md:block absolute right-0 w-16 h-16 text-enso-green/60"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M16 16C24 16 28 24 28 32C28 44 20 56 8 56V48C16 48 20 40 20 32H8V16H16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M48 16C56 16 60 24 60 32C60 44 52 56 40 56V48C48 48 52 40 52 32H40V16H48Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* نص التوصية */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-light italic">
                "{TESTIMONIALS[current].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* أزرار الأسهم السميكة */}
        <div className="flex justify-center gap-24 mt-8">
          <button
            onClick={prev}
            className="group transition-transform active:scale-90"
          >
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path
                d="M32 8L14 22.5L32 37"
                stroke="#00a859"
                strokeWidth="8"
                strokeLinecap="square"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="group transition-transform active:scale-90"
          >
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path
                d="M13 8L31 22.5L13 37"
                stroke="#00a859"
                strokeWidth="8"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* الخط السفلي مع الفقاعة */}
      <div className="absolute bottom-10 left-0 w-full px-6">
        <div className="max-w-6xl mx-auto relative h-[1px] bg-enso-green/20">
          <div className="absolute right-0 -top-1 w-2.5 h-2.5 bg-enso-green rounded-full shadow-[0_0_10px_#00a859]"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
