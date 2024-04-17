'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import Developing from '@/components/Develop'
import React, { useState } from 'react'
import masterplan from '@/public/home/MasterPlan.png'
import map from '@/public/home/map.png'

const page = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'just', duration: 0.5 }}

      className='bg-white py-16'>
      {/* <Developing /> */}

      <h1 className='pb-10 font-roboto font-bold text-[32px] leading--[37.5px] text-[#FF0000] text-center'>MASTER PLAN</h1>
      <div className=' hover:cursor-pointer transition-all'>
        {/* Your hoverable area */}
        <div className=''
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Map image */}
          <Image
            className={`transition-all w-full absolute ${isHovered ? '' : 'invisible'}`}
            alt='map'
            src={map}
            width="auto"
            height='auto'
          />
          {/* Masterplan image */}
          <Image

            className={`transition-all w-full absolute ${isHovered ? 'invisible' : ''}`}
            alt='masterplan'
            src={masterplan}
            width="auto"
            height='auto'
          />
          <Image className='w-full invisible' alt='map' src={map} width="auto" height='auto' />
        </div>
      </div>

    </motion.div>
  )
}

export default page
