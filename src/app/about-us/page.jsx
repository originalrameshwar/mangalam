'use client'
import { motion } from 'framer-motion'

import Image from 'next/image'
import React from 'react'
import gadiy from '@/public/about/shirish_gadiya.png'

import one from '@/public/about/photos/01.png'
import two from '@/public/about/photos/02.png'
import three from '@/public/about/photos/03.png'
import four from '@/public/about/photos/04.png'
import five from '@/public/about/photos/05.png'
import six from '@/public/about/photos/06.png'
import seven from '@/public/about/photos/07.png'
import eight from '@/public/about/photos/08.png'
import nine from '@/public/about/photos/09.png'
import ten from '@/public/about/photos/10.png'
import eleven from '@/public/about/photos/11.png'
import twelve from '@/public/about/photos/12.png'

const page = () => {

  // return (
  //   <main>
  //       <Developing />
  //   </main>
  // )
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className='bg-white'>

      {/* Introduction Section stats here >> */}
      <section className='flex items-center w-full justify-center bg-white py-[67px]   '>
       <div className='w-[934px] flex '>
       <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=' flex flex-col items-center justify-center mr-[62px] ' >
          <Image className='mb-[25px]' src={gadiy} width={'auto'} height={'auto'} alt="Shirish Gadiya" />
          <h2 className='mb-1 font-roboto font-medium text-[28px] leading-[32.81px] text-center text-[#FF0A0A]'>Shirish Gadiya</h2>
          <h3 className='font-roboto text-center text-black'>Shirish Gadiya</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=' w-[586px] text-justify'>
          <h1 className='mb-[3px] text-[#FF0000] font-roboto font-medium text[20px] '>Country&apos;s First Wedding Destination Club Membership
            for the first time in Chh. Sambhajinagar by Gadiya Group</h1>
          <p className='mt-[10px] font-poppins font-light text-[15px] text-justify text-black'>Gadiya Group is in the real estate sector since 1990. Hundreds of housing projects have been successfully completed & handed over to thousands of people in the last 31 years. Our scope of work extends from Aurangabad to Mumbai. Our proposed dream project is for middle-class families, a complete new concept, &quot;Mangalam Wedding Destination Club&quot;. We are setting up the first Mangalam Wedding Destination Club in Marathwada. It is a Grand Royal project spread around 16 acres in a scenic environment at Mauje Puri, Gangapur Taluka. There is a properly constructed paved tar road from Doregaon to Destination Club, and it is just 3 km away from the Aurangabad-Pune Highway.</p>

        </motion.div>
       </div>
      </section>
      {/* Introduction Section ends here << */}

      {/* information section starts here >> */}
      <section >
        <div className='pb-[14px] w-[1196px] flex flex-col m-auto'>
          <h1 className='font-roboto font-medium text-[27px] text-[#FF0000] leading-[31.64px] text-left'>What is Destination Wedding?</h1>
          <p className='font-poppins font-light text-[15px] leading-[22.5px] text-justify text-black '>A destination wedding is a royal wedding ceremony at an idyllic location. These wedding ceremonies are based on a specific concept like Rajwada, Bollywood, Indo-Western, Hawaiian Theme, etc. We have seen in newspapers or on TV channels that big celebrities of the country go abroad and have destination weddings. Many movies, TV series show destination weddings. This has created a craze for destination weddings among the youth of today. The frequency of preference for destination weddings surrounded by historical & tourist places is quite often. Moreover, the innovative food culture of the place is enjoyable. Local arts and crafts can also be explored. Wedding planners and event management are there for help. Therefore, such wedding ceremonies become very beautiful and pleasant as they are organized properly. Such royal wedding ceremonies become an unforgettable moment in life not only for the bride and groom but also for their families.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mx-auto flex flex-col items-center gap-2 pb-12 '>
          <div className='flex w-[90%] lg:w-[1163px] justify-between'>
            <Image src={one} width='auto' height='auto' alt='one' />
            <Image src={two} width='auto' height='auto' alt='two' />
            <Image src={three} width='auto' height='auto' alt='three' />
            <Image src={four} width='auto' height='auto' alt='four' />
            <Image src={five} width='auto' height='auto' alt='five' />
          </div>

          <div className='lg:w-[1163px] flex md:w-[90%] justify-between'>
            <div className='mb-2 flex flex-col justify-between h-[273px]'>
              <Image src={six} width='auto' height='auto' alt='six' />
              <Image src={seven} width='auto' height='auto' alt='seven' />
            </div>
            <Image src={eight} width='auto' height='auto' alt='eight' />
            <div className='mb-2 flex flex-col justify-between h-[273px]'>
              <Image src={nine} width='auto' height='auto' alt='nine' />
              <Image src={ten} width='auto' height='auto' alt='ten' />
            </div>
            <Image src={eleven} width='auto' height='auto' alt='eleven' />
            <Image src={twelve} width='auto' height='auto' alt='twelve' />
          </div>
        </motion.div

        >
      </section>
      {/* information section ends here << */}
    </motion.main>
  )
}

export default page
