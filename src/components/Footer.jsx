import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-enso-dark pt-32 pb-12 overflow-hidden border-t border-white/5">
      
      {/* خلفية خريطة العالم - وضعناها كـ SVG خفيف جداً لإعطاء عمق دولي */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <path fill="#00a859" d="M250,150 L260,160 L270,140 L280,155 L260,170 Z M600,200 L620,210 L630,190 L610,180 Z M800,100 L820,110 L810,130 L790,120 Z" />
          {/* ملاحظة: هنا نستخدم مسارات مبسطة، يمكنك استبدالها بصورة World Map شفافة */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* العمود الأول: الهوية (4 أعمدة) */}
          <div className="lg:col-span-4">
            <span className="text-white text-5xl font-black tracking-tighter mb-8 block" style={{ fontFamily: 'Montserrat' }}>
              enso<span className="text-enso-green">.</span>
            </span>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
              We create mega-experiences that resonate. A legacy of 30+ years crafting excellence in the Kingdom.
            </p>
          </div>

          {/* العمود الثاني: الروابط (2 عمود) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              {['About Us', 'Our Work', 'Insights', 'Experience'].map((item) => (
                <li key={item} className="hover:text-enso-green transition-all duration-300 cursor-pointer hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الخدمات (3 أعمدة) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs">Expertise</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              {['Mega Shows', 'Event Production', 'Exhibitions', 'Conferences'].map((item) => (
                <li key={item} className="hover:text-enso-green transition-all duration-300 cursor-pointer hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: التواصل (3 أعمدة) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs">Contact</h4>
            <div className="space-y-6 text-gray-400">
              <p className="leading-relaxed">Building 42, Business District,<br /> Riyadh, Saudi Arabia</p>
              <a href="mailto:hello@enso.sa" className="text-enso-green font-bold text-lg block hover:underline">hello@enso.sa</a>
              <div className="flex gap-4 pt-4">
                {/* أيقونات السوشيال ميديا بشكل دوائر صغيرة */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-enso-green transition-colors cursor-pointer text-white">
                    {/* أيقونة افتراضية */}
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* الجزء السفلي النهائي */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm font-medium">
            © 2026 enso Arabia. All rights reserved.
          </p>
          <div className="flex gap-12 mt-6 md:mt-0">
            <span className="text-gray-600 text-xs uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-gray-600 text-xs uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;