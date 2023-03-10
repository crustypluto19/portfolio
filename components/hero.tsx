import { motion, MotionStyle, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import heroPic from '../public/assets/evanc.webp'
import content from '../data/content.js'
import Logo3D from './logo3D'

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <motion.div 
      className='container mx-auto flex flex-row lg:flex-col justify-center items-start sm:items-center h-screen w-screen lg:pb-32 tracking-tight'
      ref={ref}
    >
      <motion.div className='container flex flex-col-reverse md:flex-row p-6' style={{ y }}>
        <div className='relative flex flex-wrap w-full'>
          <motion.div 
            initial={{ scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 1 }}
            whileInView={{opacity: 1, scale: 1 }}
            className='relative w-24 h-28 sm:w-36 sm:h-40 shrink-0'
          >
            <Image src={heroPic} alt='Evan Christopher' fill className="rounded-lg border-2 bg-zinc-900" />        
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{opacity: 1, x: 0}}
            className='flex flex-col py-2'
          >
            <h1 className='text-lg'>Hello world! I&apos;m</h1>
            <h2 className='text-5xl sm:text-8xl font-semibold flex flex-col'>
              <div className='flex flex-row'>
                <motion.div className='text-rose-700' >E</motion.div>
                van
              </div>
              <div className='flex flex-row'>
                <motion.div className='text-rose-700'>C</motion.div>
                hristopher
              </div>
            </h2>
            <div className='text-xl max-w-lg h-10'>
              <Typewriter
                words={content.content.heroWords}
                cursor
                typeSpeed={20}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </div>
            <div className='flex justify-end sm:justify-start items-end py-4'>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                <button type="button" className="font-semibold text-md text-red-700 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-100 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700 transition-colors duration-300">
                    <Link href="/contact">
                      Contact Me!
                    </Link>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center items-center w-full h-[36vh] sm:h-half-screen p-4'>
          <Logo3D />
      </div>
      </motion.div>
      {/* <div className='absolute blur backdrop-blur-xl w-full h-full'>
        <video autoPlay loop muted playsInline className='absolute w-full h-full object-center z-0'>
          <source src='/assets/hero.mp4' type='video/mp4' />
        </video>
      </div> */}
    </motion.div>
  )
}

export default Hero