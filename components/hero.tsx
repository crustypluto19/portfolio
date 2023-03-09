import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import heroPic from '../public/assets/evanc.webp'
import Model from './model'

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <motion.div 
      className='container mx-auto flex flex-row lg:flex-col justify-center items-start sm:items-center h-screen w-screen lg:pb-32 tracking-tight'
      ref={ref}
    >
      <motion.div className='flex flex-col-reverse md:flex-row p-6' style={{ y }}>
        <div className='flex flex-col w-full'>
          <motion.div 
            initial={{ scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 1 }}
            whileInView={{opacity: 1, scale: 1 }}
            className='relative w-36 h-40 shrink-0'
          >
            <Image src={heroPic} alt='Evan Christopher' fill className="rounded-lg mr-4 border-2 bg-zinc-900" />        
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{opacity: 1, x: 0}}
            className='flex flex-col sm:px-2'
          >
            <h1 className='text-lg ml-1'>Hello world! I&#039;m</h1>
            <h1 className='text-5xl sm:text-6xl font-semibold text-rose-700'>
              Evan Christopher
            </h1>
            <div className='m-1 text-xl max-w-lg'>
              <Typewriter
                words={[
                  "Information Systems student (B.Sc) @TUM",
                  'working student @Siemens',
                  'software engineer',
                ]}
                loop={3}
                cursor
                cursorBlinking
                typeSpeed={30}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </div>
            <div className='flex justify-end sm:justify-start items-end py-4'>
              <button className="text-xl w-48 bg-gradient-to-tr from-red-700 to-red-400 hover:bg-red-600 hover:scale-110 transition ease-linear duration-200 text-white font-bold py-2 px-4 mr-4 rounded-full">
                <Link href="/contact">
                  Contact
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center items-center w-full sm:w-half-screen max-h-64 sm:h-half-screen p-4'>
          <Canvas shadows>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[10, 10, 20]} fov={60} />
              <mesh>
                <hemisphereLight intensity={0.15} groundColor='black' />
                <spotLight
                  position={[-20, 50, 10]}
                  angle={0.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}
                />
                <pointLight intensity={1} />
              </mesh>
              <Model />
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
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