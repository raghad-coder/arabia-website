import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  // قائمة تجريبية بأسماء الشركاء (استبدلها بلوجوهاتك لاحقاً)
  const clients = [
    { id: 1, name: "SITE" },
    { id: 2, name: "SIDF" },
    { id: 3, name: "MINISTRY OF INTERIOR" },
    { id: 4, name: "PIF" },
    { id: 5, name: "ARAMCO" },
    { id: 6, name: "NEOM" },
  ];

  // نكرر المصفوفة مرتين لضمان استمرارية الحركة دون فراغات
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-enso-dark overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-sm tracking-[0.4em] uppercase"
        >
          Our Clients
        </motion.h2>
      </div>

      {/* حاوية الحركة */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          className="flex flex-nowrap shrink-0 gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }} // التحرك من البداية حتى نصف المصفوفة المكررة
          transition={{
            ease: "linear",
            duration: 20, // سرعة الحركة (كلما زاد الرقم كانت أبطأ)
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] h-20"
            >
              {/* هنا نضع اللوجو، حالياً نضع نصاً أبيض كبيراً */}
              {/* التعديل هنا: حذفنا الـ /30 ليكون اللون أبيض كاملاً */}
              <span className="text-white text-2xl md:text-3xl font-bold cursor-default whitespace-nowrap enso-glow-text">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
