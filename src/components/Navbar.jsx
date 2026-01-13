import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // إذا نزل المستخدم أكثر من 20 بكسل، تبدأ الخلفية في الظهور
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-8 py-5 md:px-16 flex justify-between items-center ${
        isScrolled
          ? "bg-enso-dark/90 backdrop-blur-lg border-b border-white/5 py-4" // يغمق قليلاً عند النزول
          : "bg-transparent py-7" // شفاف تماماً في البداية
      }`}
    >
      {/* اللوجو (كما أضفناه أعلاه) */}
      <div className="flex items-center">
        <span className="text-white text-4xl font-black tracking-tighter">
          enso<span className="text-enso-green">.</span>
        </span>
      </div>

      {/* أيقونة المنيو - مطابقة للصورة */}
      <div className="cursor-pointer group">
        <div className="w-14 h-14 border-2 border-white/20 rounded-full flex flex-col items-center justify-center gap-1.5 hover:border-enso-green transition-all duration-300">
          <span className="w-6 h-[2.5px] bg-white group-hover:bg-enso-green"></span>
          <span className="w-6 h-[2.5px] bg-white group-hover:bg-enso-green"></span>
          <span className="w-6 h-[2.5px] bg-white group-hover:bg-enso-green"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
