'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import image1 from '@/public/home/profile.png';

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            console.log(className)
            if (index === 0) {
                return '<span class="' + className + '" style="display: inline-block; width: 15px; height: 15px; border-radius: 50%; background-color: red;  "></span>';  // create this span in red color

            }
            return '<span class="' + className + '" style="display: inline-block; width: 15px; height: 15px; border-radius: 50%; background-color: red;  "></span>';  // create this span in red color
        }
    }

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'1'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 0,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }
            }
            pagination={pagination}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className=''>
                    <div className='flex items-center justify-center flex-col'>
                        <p className='px-[100px] font-roboto font-medium text-[22px] leading-[25.78px] text-center py-[22px]'>The venue was aesthetically pleasing, accommodating, and versatile for different themes.
                            Setup and decor were meticulously arranged, reflecting the couple&apos;s style.</p>
                        <Image src={image1} alt='image1' width='auto' height='aut' />
                        <h3 className='font-roboto font-medium text-[28px] leading-[32.81px] text-center text-[#FF0A0A] pt-4 '>Mr. Kulkarni</h3>
                    </div>
                    <div className='invisible'>
                        <Image src={image1} alt='image2' width='auto' height='aut' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=''>
                    <div className='flex items-center justify-center flex-col'>
                        <p className='px-[100px] font-roboto font-medium text-[22px] leading-[25.78px] text-center py-[22px]'>Guests were impressed with the overall experience. While it might be a significant investment, 
the value received justifies the cost  I highly recommend this destination 
for couples seeking a memorable wedding experience.</p>
                        <Image src={image1} alt='image4' width='auto' height='aut' />
                        <h3 className='font-roboto font-medium text-[28px] leading-[32.81px] text-center text-[#FF0A0A] pt-4 '>Mrs. Agarwal</h3>
                    </div>
                    <div className='invisible'>
                        <Image src={image1} alt='image5' width='auto' height='aut' />
                    </div>
                </div>
            </SwiperSlide>

            <div className="autoplay-progress hidden" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper >

    );
};

export default Carousel;
