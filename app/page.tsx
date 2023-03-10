"use client";

import AboutHome from '@component/components/aboutHome';
import WorkHome from '@component/components/workHome';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRef } from 'react';
import Hero from '../components/hero';

export default function Home() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className='snap snap-y snap-mandatory h-screen w-screen overflow-x-hidden transition ease-in-out duration-500'>
      <section className={`snap-center h-screen w-screen relative ${ theme === "light" ? "bg-white" : "bg-zinc-900"}`}>
        <motion.div style={{ y }}>
          <Hero />
        </motion.div>
      </section>
      <section className="snap-center h-screen w-screen relative bg-rose-700">
        <AboutHome />
      </section>
      <section className={`snap-center h-screen w-screen relative ${ theme === "light" ? "bg-white" : "bg-zinc-900"}`}>
        <WorkHome />
      </section>
    </div>
  )
}
