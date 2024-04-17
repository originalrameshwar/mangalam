'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Developing from '@/components/Develop';
import one from '@/public/amenities/1.png';
import two from '@/public/amenities/2.png';
import three from '@/public/amenities/3.png';
import four from '@/public/amenities/4.png';
import five from '@/public/amenities/5.png';
import six from '@/public/amenities/6.png';
import seven from '@/public/amenities/7.png';
import eight from '@/public/amenities/8.png';
import nine from '@/public/amenities/9.png';
import ten from '@/public/amenities/10.png';
import eleven from '@/public/amenities/11.png';
import twelve from '@/public/amenities/12.png';
import mostach from '@/public/amenities/mostach.png';
import temple from '@/public/amenities/temple.png';
import banquethall from '@/public/amenities/banquethall.png';

import banquet from '@/public/amenities/hover/banquet.png';
import carnival from '@/public/amenities/hover/carnival.png';
import cottages from '@/public/amenities/hover/cottages.png';
import indo from '@/public/amenities/hover/indo.png';
import mughal from '@/public/amenities/hover/mughal.png';
import parikrama from '@/public/amenities/hover/parikrama.png';
import rajasthani from '@/public/amenities/hover/rajasthani.png';
import restaurant from '@/public/amenities/hover/restaurant.png';
import shoot from '@/public/amenities/hover/shoot.png';


const Page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className=' bg-white py-9 pb-[127px] px-[71px]'
    >
      {/* <Developing /> */}
      {/* AMENITIES gallery starts here >> */}
      <section className=''>
        <h1 className='text-center text-[#FF0000] text-[32px] mb-[17px] font-medium'>AMENITIES</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:w-[1297px] text-white lg:m-auto'>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10'>
                <Image src={rajasthani} alt='rajasthani' width={55} height={61} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>
                  Wedding Lawn1- Rajasthani Theme
                </h2>
              </div>
            </motion.div>
            <Image className='' src={one} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10'>
                <Image src={mughal} alt='rajasthani' width={55} height={61} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Wedding Lawn2- Mughal Theme
                </h2>
              </div>
            </motion.div>
            <Image className='' src={two} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10'>
                <Image src={indo} alt='rajasthani' width={55} height={61} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Wedding Lawn3- lndo-western Theme
                </h2>
              </div>
            </motion.div>
            <Image className='' src={three} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-[11px]'>
                <Image src={shoot} alt='rajasthani' width={43} height={35} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Wedding Shoot Setup
                </h2>
              </div>
            </motion.div>
            <Image className='' src={four} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-[11px]'>
                <Image src={restaurant} alt='rajasthani' width={37} height={50} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Restaurant
                </h2>
              </div>
            </motion.div>
            <Image className='' src={five} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-[24px]'>
                <Image src={parikrama} alt='rajasthani' width={55} height={40} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Parikrama
                  {"\n"}Amphitheater {"\n"}Style Wedding
                </h2>
              </div>
            </motion.div>
            <Image className='' src={six} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-1'>
                <Image src={banquet} alt='rajasthani' width={32} height={32} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Banquet Hall
                </h2>
              </div>
            </motion.div>
            <Image className='' src={seven} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-[5px]'>
                <Image src={cottages} alt='rajasthani' width={26} height={22} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Cottages
                </h2>
              </div>
            </motion.div>
            <Image className='' src={eight} alt='one' width={'auto'} height={'auto'} />
          </div>

          <div className='hover:cursor-pointer relative overflow-hidden'>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -430 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='h-[818px] absolute top-0 right-0 left-0  transition-all'>
              <div className='h-1/2'>
              </div>
              <div className='h-1/2 bg-[#00000085] flex justify-center items-center text-center px-10 gap-1'>
                <Image src={carnival} alt='rajasthani' width={37} height={37} />
                <h2 className=' font-roboto font-medium text-[26px] leading-[30.47px] max-w-[your-width-value]'>Carnival Theme Setup
                </h2>
              </div>
            </motion.div>
            <Image className='' src={nine} alt='one' width={'auto'} height={'auto'} />
          </div>
        </div>
      </section>
      {/* AMENITIES gallery ends here << */}


      {/* ? Wedding details >> */}
      <section className=' lg:py-[168px] lg:px-[112px] grid grid-cols-1 gap-[113px]'>

        <div className='flex w-full gap-[61px]'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image className='' src={ten} width='auto' height='auto' alt='ten' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-1/2 '
          >
            <div className='lg:w-[80%]'>
              <div className='pb-5 items-center flex gap-1  '>
                <Image className='pr-[19px]' src={mostach} width="auto" height='auto' alt='mostach' />
                <h2 className='font-roboto font-medium text-[32px] leading-[37.5px] text-[#FF0000]'>WEDDING LAWN - 1 Rajasthani Theme</h2>
              </div>
              <p className='text-black font-poppins font-light text-[15px] leading-[22.5px] text-justify '>This place is going to have a grand lawn. The stage where the wedding ceremony will take place will have a replica of a Rajasthani palace. A beautifully decorated stage will be erected. A royal arrangement will be made to seat dignitaries on the grand lawn, befitting a palace. Royal food will also be arranged. All these magnificence will be dazzling to the divine eyes.</p>
            </div>
          </motion.div>
        </div>

        <div className='flex gap-[61px]'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-1/2'>
            <div className='lg:w-[80%]'>
              <div className='pb-5 items-center flex gap-1'>
                <div>
                  <Image className='pr-[19px]' src={temple} width={55} height={70} alt='mostach' />
                </div>

                <h2 className='font-roboto font-medium text-[32px] leading-[37.5px] text-[#FF0000]'>WEDDING LAWN - 2 Mughal Theme</h2>
              </div>
              <p className='text-black font-poppins font-light text-[15px] leading-[22.5px] text-justify'>
                The specialty of Mangalam Wedding Destination Club is that all traditions and culture are considered here. The Mughal period architecture is equally famous. Even today, many buildings and palaces in the country bear the imprint of the glorious Mughal architecture. A reflection of this glorious Mughal architecture can be seen on Wedding Lawn 2 here. The Mughal Imperial Gateway is going to be equally unique. Space is provided for the pre-function. The main stage will be set up for the wedding ceremony. A replica of the palace based on Mughal architecture will catch everyone&apos;s attention. There will be two stages surrounding the main stage with a grand lawn for sitting dignitaries and royal dining for the guests.
                .</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image className='' src={eleven} width='auto' height='auto' alt='ten' />
          </motion.div>
        </div>

        <div className='flex gap-[61px]'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image className='' src={twelve} width='auto' height='auto' alt='ten' />

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-1/2'>
            <div className='lg:w-[88%]'>
              <div className='pb-5 items-center flex gap-1 '>
                <Image className='pr-[19px]' src={mostach} width={47} height={70} alt='mostach' />
                <h2 className='font-roboto font-medium text-[32px] leading-[37.5px] text-[#FF0000]'>WEDDING LAWN - 2 lndo-Western Theme</h2>
              </div>
              <p className='text-black font-poppins font-light text-[15px] leading-[22.5px] text-justify'>Those who want to create a modern atmosphere for their wedding ceremony. For such, a marriage venue based on the &apos;Indo-Western&apos; concept is being set up here. A fusion of Indian and Western traditions and culture can be seen here. You will get to see an excellent architecture with a modern design at the entrance. Space is left here for the pre-function. The main stage will be where the wedding ceremony will take place. There will be two stages around. There will be an expansive lawn for sitting dignitaries, a modern &quot;Thatbat&quot; for royal dining.</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ? Wedding details << */}

      {/* Banquet Hall >> */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className='flex justify-center flex-col items-center' >

        <h1 className='pb-[29px] font-roboto font-medium text-[24px] leading-[28.13px] text-center text-[#FF0000]'>Banquet Hall</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image src={banquethall} width='auto' height='auto' alt='banquethall' />
        </motion.div>
        <div className='text-black px-32 mt-[51px] lg:min-w-[797px]'>
          <ul className='grid grid-cols-4 list-disc list-inside text-red-500'>
            <li ><span className='text-black py-3'>Valet Parking</span></li>
            <li ><span className='text-black py-3'>Swimming Pool</span></li>
            <li ><span className='text-black py-3'>Gazebos</span></li>
            <li ><span className='text-black py-3'>Party Deck</span></li>
            <li ><span className='text-black py-3'>Grand Lobby</span></li>
            <li ><span className='text-black py-3'>Reception</span></li>
            <li ><span className='text-black py-3'>Cafeteria</span></li>
            <li ><span className='text-black py-3'>Cottages</span></li>
            <li ><span className='text-black py-3'>Restaurant</span></li>
            <li ><span className='text-black py-3'>Gym + Spa</span></li>
            <li className='col-span-2'><span className='text-black py-3'>80 Rooms (Suite, Deluxe & Premium)</span></li>
          </ul>
        </div>
      </motion.section>
      {/* Banquet Hall << */}
    </motion.div>
  );
};

export default Page;
