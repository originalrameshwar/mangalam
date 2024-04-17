'use client'
import { motion } from 'framer-motion'
import Developing from '@/components/Develop'
import React from 'react'
import Image from 'next/image'

import one from '@/public/gallery/1.png'
import two from '@/public/gallery/2.png'
import three from '@/public/gallery/3.png'
import four from '@/public/gallery/4.png'
import five from '@/public/gallery/5.png'
import six from '@/public/gallery/6.png'
import seven from '@/public/gallery/7.png'
import eight from '@/public/gallery/8.png'
import nine from '@/public/gallery/9.png'
import ten from '@/public/gallery/10.png'
import eleven from '@/public/gallery/11.png'
import twelve from '@/public/gallery/12.png'
import thirteen from '@/public/gallery/13.png'
import fourteen from '@/public/gallery/14.png'
import fifteen from '@/public/gallery/15.png'
import sixteen from '@/public/gallery/16.png'
import seventeen from '@/public/gallery/17.png'
import eighteen from '@/public/gallery/18.png'
import nineteen from '@/public/gallery/19.png'
import twenty from '@/public/gallery/20.png'
import twentyone from '@/public/gallery/21.png'

const page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className='py-4 bg-white flex flex-col items-center w-full '
    >
      {/* <Developing /> */}
      <h1 className='pb-2 font-roboto font-bold text-[32px] leading--[37.5px] text-[#FF0000] text-center'>GALLERY</h1>
      <div className='grid grid-cols-3 w-full gap-8 lg:px-[102px] max-w-[1224px]  '>
        <Image src={one} alt='one' width={"auto"} height={"auto"} />
        <Image src={two} alt='two' width={"auto"} height={"auto"} />
        <Image src={three} alt='three' width={"auto"} height={"auto"} />
        <Image src={four} alt='four' width={"auto"} height={"auto"} />
        <Image src={five} alt='five' width={"auto"} height={"auto"} />
        <Image src={six} alt='six' width={"auto"} height={"auto"} />
        <Image src={seven} alt='seven' width={"auto"} height={"auto"} />
        <Image src={eight} alt='eight' width={"auto"} height={"auto"} />
        <Image src={nine} alt='nine' width={"auto"} height={"auto"} />
        <Image src={ten} alt='ten' width={"auto"} height={"auto"} />
        <Image src={eleven} alt='eleven' width={"auto"} height={"auto"} />
        <Image src={twelve} alt='twelve' width={"auto"} height={"auto"} />
        <Image src={thirteen} alt='thirteen' width={"auto"} height={"auto"} />
        <Image src={fourteen} alt='fourteen' width={"auto"} height={"auto"} />
        <Image src={fifteen} alt='fifteen' width={"auto"} height={"auto"} />
        <Image src={sixteen} alt='sixteen' width={"auto"} height={"auto"} />
        <Image src={seventeen} alt='seventeen' width={"auto"} height={"auto"} />
        <Image src={eighteen} alt='eighteen' width={"auto"} height={"auto"} />
        <Image src={nineteen} alt='nineteen' width={"auto"} height={"auto"} />
        <Image src={twenty} alt='twenty' width={"auto"} height={"auto"} />
        <Image src={twentyone} alt='twentyone' width={"auto"} height={"auto"} />
      </div>
    </motion.div>
  )
}

export default page
