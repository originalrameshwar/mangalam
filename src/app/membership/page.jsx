'use client'
import { motion } from 'framer-motion'

import Developing from '@/components/Develop'
import React from 'react'
import Image from 'next/image'


import cover from '@/public/membership/cover.png'
import Mcarousel from './components/Mcarousel'

const page = () => {
  return (
    <motion.div className='bg-white'>
      {/* <Developing /> */}

      <section className='px-[122px] py-[35px] '>
        <h1 className='pb-10 font-roboto font-bold text-[32px] leading--[37.5px] text-[#FF0000] text-center'>Membership Plans</h1>
        <Image className='w-full' alt='map' src={cover} width="auto" height='auto' />
        <div className='py-11 flex items-center justify-center gap-20 '>
          <button className='hover:bg-[#F4AB16] transition-all font-roboto text-[32px] bg-[#ff0000] rounded-md py-2 px-5 text-white'>Gold Membership</button>
          <button className='hover:bg-[#F4AB16] transition-all font-roboto text-[32px] bg-[#ff0000] rounded-md py-2 px-5 text-white'>Silver Membership</button>
        </div>
        <ul className='flex flex-col gap-4 list-disc list-inside text-red-500'>
          <li><span className='text-black text-[15px]' >15 years membership for the club house, restaurant, children play area and other sport facilities</span></li>
          <li><span className='text-black text-[15px]' >2 days & 2 nights free stay for every year*.</span></li>
          <li><span className='text-black text-[15px]' >Apart from this, members will get special discount on rooms and restaurant throughout the tenure.</span></li>
          <li><span className='text-black text-[15px]' >Members covered under Membership - Husband, Wife & 2 Children.</span></li>
          <li><span className='text-black text-[15px]' >One full-fledged Event/Wedding (1) Lawn, 1 Banquet Hall & 40 rooms for 2 days) in membership tenure.</span></li>
          <li><span className='text-black text-[15px]' >Lawn & Banquet Hall would be well decorated with appropriate seating arrangement.</span></li>
          <li><span className='text-black text-[15px]' >Pure Vegetarian Maharashtrian Restaurant</span></li>
          <li><span className='text-black text-[15px]' >Inhouse Catering facility available in all financial plans (Members can also avail outside catering).</span></li>
          <li><span className='text-black text-[15px]' >Transferable Membership.</span></li>
          <li><span className='text-black text-[15px]' >All event related additional requirements would be provided under one roof (on extra cost).</span></li>
        </ul>
      </section>

      <section className='px-[122px] py-[57px]'>
        <Mcarousel />
      </section>
    </motion.div>
  )
}

export default page
