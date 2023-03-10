import React from 'react'
import { motion } from 'framer-motion'

const AboutHome = () => {

  return (
    <div className="container mx-auto flex flex-col justify-start items-start min-h-screen w-screen relative p-6 pt-20">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 1 }}
        whileInView={{opacity: 1, scale: 1 }}
        className='text-4xl sm:text-6xl pb-5 sm:pb-10 tracking-wider leading-normal'
      >
        I&apos;m Evan and I like to build things.
      </motion.div>
      <motion.div 
        className='text-2xl'>I&apos;m an aspiring software engineer and a working student studying in Munich. Creating has always been my passion - whether it be developing applications or photography.
      </motion.div>
      <motion.div 
        className='text-2xl'>Here are a few technologies I&apos;ve been working with recently:
      </motion.div>
      <div className='flex flex-row flex-wrap justify-start items-start w-full p-2'>
        {/* horizontal scroll */}
      </div>
      <div className='flex justify-end items-end w-full p-2'>
        <button>
          Learn more about me
        </button>
      </div>
    </div>
  )
}

const container = {
  hidden: { 
    scale: 0.9, opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
}

export default AboutHome