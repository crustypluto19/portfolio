import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import content from '../data/content.js'
import Logo3D from './logo3D'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

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
            <motion.h1 variants={animateHello} className='text-lg ml-1'>Hello world! I&apos;m</motion.h1>
            <motion.h2 variants={animateName} className='text-6xl sm:text-9xl font-semibold flex flex-col'>
              <div className='flex flex-row'>
                <motion.div
                  variants={animateEC}
                  className='text-rose-700'
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
            <motion.div variants={animateTypeWriter} className='text-xl max-w-lg h-10 my-3 sm:my-4 ml-1'>
              <Typewriter
                words={content.content.heroWords}
                cursor
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={1750}
              />
            </motion.div>
            <motion.div variants={animateSocialLinks} className='flex sm:justify-start sm:items-start items-end justify-end py-4'>
              <div className="flex justify-center space-x-6">
                <a href={content.socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="text-4xl sm:text-5xl hover:scale-110 hover:text-current hover:shadow-xl shadow-black transition linear duration-300 rounded-md" />
                </a>
                <a href={content.socialLinks.github} target="_blank" rel="noreferrer">
                  <AiFillGithub className="text-4xl sm:text-5xl hover:scale-110 hover:text-current hover:shadow-xl shadow-black transition linear duration-300 rounded-md" />
                </a>
                <a href={content.socialLinks.instagram} target="_blank" rel="noreferrer">
                  <AiFillInstagram className="text-4xl sm:text-5xl hover:scale-110 hover:text-current hover:shadow-xl shadow-black transition linear duration-300 rounded-md" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className='flex justify-start items-start w-full h-[40vh] sm:h-half-screen p-4'>
          <Logo3D />
        </div>
      </motion.div>
    </motion.div>
  )
}

const container = {
  show: {
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
    scale: 1,
    transition: { duration: 1, delay: 1.5 }
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
    rotate: [0, -5, 5, 0],
    transition: { 
      type:"spring",
      bounce: 0.4,
      duration: 1.5 
    }
  },
}

const animateTypeWriter = {
  hidden: { x: -100 },
  show: {
    x: 0,
    transition: { duration: 1 },
  },
}

const animateSocialLinks = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
}

export default Hero