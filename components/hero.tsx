import React from 'react'
import Image from 'next/image'
import heroPic from '../public/assets/evan.webp'

const Hero = () => {
  return (
    <div className='min-h-screen'>
      <Image
        src = {heroPic}
        alt = "Evan Christopher"
        className='object-cover'
        fill
      />
    </div>
  )
}

export default Hero