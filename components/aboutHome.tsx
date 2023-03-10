import React from 'react'
import { motion } from 'framer-motion'
import { RoughNotation } from 'react-rough-notation'

const AboutHome = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-start h-screen w-screen relative p-6 bg-inherit'>
      <motion.div 
        initial={{ scale: 0.9 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        whileInView={{opacity: 1, scale: 1 }}
        className='text-4xl sm:text-6xl pb-5 sm:pb-10 tracking-wider leading-normal'
      >
        {/* <RoughNotation type='underline' color='red' strokeWidth={5} show={true}> Evan </RoughNotation>  */}
        I'm Evan and I like to build things.
      </motion.div>
      <div className='text-2xl'>I'm an aspiring software engineer and a working student studying in Munich. Creating has always been my passion - whether it be applications or pictures. </div>
    </div>
  )
}

export default AboutHome