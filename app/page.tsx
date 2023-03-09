"use client"
import AboutHome from '@component/components/aboutHome';
import WorkHome from '@component/components/workHome';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../components/hero';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div ref={ref} className='snap snap-y snap-mandatory h-screen w-screen overflow-x-hidden scrollbar-hide transition ease-in-out duration-500'>
      <section className='snap-center h-screen w-screen'>
        <motion.div style={{ y }}>
          <Hero />
        </motion.div>
      </section>
      <section className='snap-center h-screen w-screen scroll-mt-1.5 bg-yellow-500'>
        <AboutHome />
      </section>
      <section className='snap-center h-screen w-screen scroll-mt-1.5 bg-cyan-300'>
        <WorkHome />
      </section>
    </div>
  )
}
