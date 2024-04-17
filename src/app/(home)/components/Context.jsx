'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import homebg2 from '@/public/home/Homebg2.png'


export const Context = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                // initial={{ opacity: 0, y: 20  }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}

                className='text-black w-[47%]'>
                <h1 className='font-medium text-[32px] text-[#FF0000] leading-[37.5px] mb-[6px]'>Our Story</h1>
                <p className='text-[15px] font-light font-poppins text-justify leading-[22.5px]'>MANGALAM WEDDING DESTINATION CLUB is a proposed dream project of Gadiya Group that aims at creating a destination where much awaited Weddings & Events will happen with access to Luxury Amenities, an eye-catching environment as well as incorporating the religious beliefs in the design. A rich and significant design of Indian architecture was an idea behind the development of the site. This guides us to harmonize the project with both beauty and utility of given requirements. Three large lush green Wedding Lawns, eye-catching Photoshoot Garden, Parikrama Amphitheater for Wedding, Kids Play Area, Restaurant, Cottages and a Parking that can accommodate over thousand cars - all this sum to a perfect location for Weddings, Conferences, Parties, Family Outings and much more</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='lg:ml-[92px]  w-1/2'>
                <div className='w-[100%] justify-end flex'>
                    <Image alt='home2' src={homebg2} width='659px' height='444px' />
                </div>
            </motion.div>

        </>
    )
}


