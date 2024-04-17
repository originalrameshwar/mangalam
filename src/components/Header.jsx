'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/header/logo.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import file from '@/public/MangalamBrochure.pdf'

const Header = () => {

  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className=' w-full bg-[#000000] font-roboto flex items-center justify-around text-white'>
      <div className='flex items-center h-[122px]   '>

        <div className='lg:mr-8 '>
          <Image alt='logo' src={logo} width='166' height='41' />
        </div>

        <ul className='flex gap-[24px] items-center justify-center font-medium text-[17px] '> {/* // TODO: give a effect that will show what link is open ( when link is opend li items should be in red text color ) */}
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="/" >HOME</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="about-us" >ABOUT US</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="amenities" >AMENITIES</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="membership" >MEMBERSHIP</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="master-plan" >MASTER PLAN</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="gallery" >GALLERY</Link></li>
        </ul>


      </div>
      <div className=' flex justify-center items-center'>
        <h2 className='mr-[15px] text-[16px] '>For more details check our brochure</h2>
        {/* <a href='/MangalamBrochure.pdf' target='_black' className='text-center px-[13px] py-[1px] text-[#000000] hover:bg-[#E80005] hover:text-white transition-all font-medium text-[23px] bg-[#FDB112]'>Download</a>  */}
        <Link  href='https://drive.google.com/file/d/1KxeUr95RLh2PNF91WgXDCx2Hm2hdnKDQ/view?usp=drivesdk' target='_black' className='text-center px-[13px] py-[1px] text-[#000000] hover:bg-[#E80005] hover:text-white transition-all font-medium text-[23px] bg-[#FDB112]' locale={false}>Download</Link > 
      </div>
    </motion.nav>
  )
}

export default Header
