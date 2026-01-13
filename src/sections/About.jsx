import React from "react";
import AboutUs from "../assets/AboutUs.jfif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full py-24 px-6 bg-enso-dark overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* نصوص القسم مع أنيميشن */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-enso-green text-3xl font-bold mb-2">ABOUT US</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            enso Arabia : Crafting Mega-Experiences for 30+ Years.
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Experience impressive events with enso Arabia, your all-in-one
            mega-experiences powerhouse. Let us shape your future events with a
            30+ years legacy and expert event organizer and production Team.
          </p>
          
            <button className="px-10 py-3 border border-enso-green text-enso-green rounded-full hover:bg-enso-green hover:text-white transition-all duration-300">
              View more
            </button>
          
        </motion.div>

        {/* صورة القسم أو فيديو كما في اللقطة (00:07) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src={AboutUs}
            className="w-full h-full object-cover"
            alt="Event production"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
