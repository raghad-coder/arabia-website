import React from "react";
import { motion } from "framer-motion";
import EventOne from "../assets/EventOne.mp4";
import EventTwo from "../assets/EventTwo.mp4";
import EventThree from "../assets/EventThree.mp4";
import EventFour from "../assets/EventFour.mp4";

const Work = () => {
  // بيانات تجريبية لمحاكاة الصور في الفيديو
  const projects = [
    { id: 1, title: "Event 1", category: "Production", videoSrc: EventOne },
    { id: 2, title: "Event 2", category: "Conferences", videoSrc: EventTwo },
    { id: 3, title: "Event 3", category: "Mega Shows", videoSrc: EventThree },
    { id: 4, title: "Event 4", category: "Exhibitions", videoSrc: EventFour },
  ];
  return (
    <section className="py-24 px-6 bg-enso-dark">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-sm tracking-[0.4em] uppercase mb-4"
          >
            Instagram Feed
          </motion.h2>
          <div className="w-20 h-[2px] bg-enso-green"></div>
        </div>

        {/* شبكة الصور (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // تأثير الدخول المتتابع
              className="group relative h-[400px] overflow-hidden rounded-xl border border-white/5 cursor-pointer"
            >
              {/* الصورة الأساسية */}
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* طبقة شفافة تظهر عند الـ Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-enso-green text-sm uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                {/* أيقونة تشغيل صغيرة (مثل الفيديو) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-enso-green group-hover:border-enso-green transition-all duration-500">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر المتابعة كما في الفيديو */}
        <div className="mt-16 text-center">
          <button className="px-12 py-4 bg-enso-green text-white rounded-full font-bold hover:bg-white hover:text-enso-green transition-all duration-500">
            Follow us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
