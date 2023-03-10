import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import content from '../data/content.js'
import Logo3D from './logo3D'

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <motion.div 
      className="container mx-auto flex flex-row lg:flex-col justify-center items-start h-screen w-screen lg:pb-32 tracking-tight"
      ref={ref}
    >
      <motion.div className='container flex flex-col-reverse md:flex-row p-6' style={{ y }}>
        <div className='relative flex flex-col w-full'>
          <motion.div 
            variants={container}
            initial='hidden'
            animate='show'
            className='flex flex-col py-2'
          >
            <motion.h1 variants={animateHello} className='text-lg'>Hello world! I&apos;m</motion.h1>
            <motion.h2 variants={animateName} className='text-6xl sm:text-9xl font-semibold flex flex-col'>
              <div className='flex flex-row'>
                <motion.div
                  variants={animateEC}
                  className='text-rose-700 scale-110'
                >
                  E
                </motion.div>
                van
              </div>
              <div className='flex flex-row'>
                <motion.div
                  variants={animateEC}
                  className='text-rose-700 scale-110'
                >
                  C
                </motion.div>
                hristopher
              </div>
            </motion.h2>
            <motion.div variants={animateTypeWriter} className='text-xl max-w-lg h-10 my-3 sm:my-4'>
              <Typewriter
                words={content.content.heroWords}
                cursor
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={1750}
              />
            </motion.div>
            <div className='flex sm:justify-start sm:items-start items-end justify-end py-4'>
              <motion.div
              variants={animateContact}
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
              >
                <button type="button" className="text-xl sm:text-3xl text-white hover:text-white border hover:bg-rose-700 border-white hover:white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-100 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700 transition-colors duration-300">
                    <Link href="/contact">
                      Contact Me!
                    </Link>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-start items-start w-full h-[40vh] sm:h-half-screen p-4'>
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

const container = {
  hidden: { x: 100, opacity: 0 },
  show: {
      x: 0,
      opacity: 1,
      transition: {
          staggerChildren: 1,
          delayChildren: 1,
          duration: 0.8,
      },
  },
}

const animateHello = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
},
}

const animateEC = {
  hidden: { scale: 0.9 },
  show: { 
    scale: 1.1,
    transition: { duration: 1 }
  },
}

const animateName = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: { 
    x: 0,
    opacity: 1,
    rotate: [0, 10, -10, 0],
    transition: { 
      type:"spring",
      bounce:0.4,
      duration: 1.5 
    }
  },
}

const animateTypeWriter = {
  hidden: { x: 10 },
  show: {
    x: 0,
    transition: { duration: 1 },
  },
}

const animateContact = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
}

export default Hero