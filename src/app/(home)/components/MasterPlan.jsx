'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import masterplan from '@/public/home/MasterPlan.png'
import map from '@/public/home/map.png'


const MasterPlan = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <div className='relative w-full'>
            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='text-white font-roboto font-bold text-[30px] leading-[35.16px] text-center absolute top-0 left-0 w-full mt-[61px]'
            >
                MASTERPLAN
            </motion.h2>
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
        </div>
    )
}

export default MasterPlan
