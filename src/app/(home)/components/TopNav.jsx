'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import mail from '@/public/header/Gmail_icon.png'
import call from '@/public/header/call_icon.png'
import facebook from '@/public/header/Facebook_icon.png'
import instagram from '@/public/header/Instagram_icon.png'
import youtube from '@/public/header/YouTube_icon.png'


const TopNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nav section starts here >> */}
      <section className='h-[51px] bg-[#E80005] flex px-[95px] justify-between text-white '>
        <div className='gap-[6px] flex items-center'>
          <div>
            <Image alt='mail' src={mail} width='24' height='16.94' />
          </div>
          <a className='text-[15px] hover:text-black text-white transition-all' href="mailto:marketing@mangalamwedding.com">marketing@mangalamwedding.com</a>
          <div>
            <Image alt='call' src={call} width='17' height='17' />
          </div>
          <a className='hover:text-black text-white transition-all' href="tel:9823225546">+91 9823225546</a>

        </div >

        <div className='gap-[6px] flex items-center'>
          <div >
            <Image alt='call' src={call} width='17' height='17' />
          </div>
          <a className='hover:text-black text-white transition-all' href="tel:9090983636">+91 9090983636</a>

          <div className="flex gap-[9px] items-center justify-center"><div >  {/* TODO: add social links here */}
            <a href="https://m.facebook.com/MangalamWeddingDestination" target='_blank'><Image alt='facebook' className='hover:cursor-pointer hover:invert transition-all' src={facebook} width='19' height='22' /></a>
          </div>
            <div >
              <a href="https://www.instagram.com/mangalamweddingdestination/" target='_blank'><Image alt='instagram' className='hover:cursor-pointer hover:invert transition-all' src={instagram} width='19' height='224' /></a>
            </div>
            <div >
              <a href="https://youtube.com/@mangalamweddingdestinationclub?si=6ydUDO9lXV0Oa8nx" target='_blank'><Image alt='youtube' className='hover:cursor-pointer hover:invert transition-all' src={youtube} width='19' height='22' /></a>
            </div></div>


        </div>
      </section>
      {/* Nav section ends here << */}
    </motion.div>
  )
}

export default TopNav
