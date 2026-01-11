import React from 'react';

const Navbar = () => {
  return (
    // nav: الحاوية الأساسية. جعلناها absolute لتطفو فوق الفيديو/الخلفية
    // w-full: لتأخذ عرض الشاشة بالكامل
    // z-50: لضمان ظهورها فوق أي عنصر آخر في الموقع
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12">
      
      {/* جهة اليسار: اللوجو */}
      <div className="flex items-center">
        {/* سنضع نصاً مؤقتاً "enso" بنفس ستايل الفيديو حتى تجلب اللوجو */}
        <span className="text-white text-3xl font-bold tracking-tighter">
          enso<span className="text-enso-green">.</span>
        </span>
      </div>

      {/* جهة اليمين: أيقونة المنيو */}
      <div className="cursor-pointer">
        <div className="w-10 h-10 border border-white/30 rounded-full flex flex-col items-center justify-center gap-1 hover:border-enso-green transition-all">
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;