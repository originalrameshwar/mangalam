'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import homebg1 from '@/public/home/Homebg1.png'
import homebg2 from '@/public/home/homebg_2.png'
import homebg3 from '@/public/home/homebg_3.png'
import homebg4 from '@/public/home/homebg_4.png'


// import required modules
import { Autoplay, EffectCoverflow, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Background = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                modules={[EffectFade, Pagination, Autoplay, EffectCoverflow]}
                className="mySwiper"

            >
                <SwiperSlide className=' '>
                    <Image className='lg:w-full md:h-full ' alt='home' src={homebg2} height='auto' width='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='lg:w-full md:h-full '  alt='home' src={homebg3} height='auto' width='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='lg:w-full md:h-full '  alt='home' src={homebg4} height='auto' width='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='lg:w-full md:h-full '  alt='home' src={homebg1} height='auto' width='auto' />
                </SwiperSlide>
            </Swiper>
            <div className="autoplay-progress hidden" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </>
    );
}

export default Background
