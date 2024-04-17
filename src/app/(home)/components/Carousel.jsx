'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import image1 from '@/public/home/carausal/image1.png';
import image2 from '@/public/home/carausal/image2.png';
import image3 from '@/public/home/carausal/image3.png';
import image4 from '@/public/home/carausal/image4.png';
import image5 from '@/public/home/carausal/image5.png';

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'4'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 1,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={false}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide className=''>
                <Image src={image1} alt='image1' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image2} alt='image2' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image3} alt='image3' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image4} alt='image4' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image5} alt='image5' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image1} alt='image6' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image2} alt='image7' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image3} alt='image8' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image4} alt='image9' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image5} alt='image10' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image1} alt='image11' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image2} alt='image12' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image3} alt='image13' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image4} alt='image14' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image5} alt='image15' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image1} alt='image16' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image2} alt='image17' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image3} alt='image18' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image4} alt='image19' width='auto' height='aut' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image5} alt='image20' width='auto' height='aut' />
            </SwiperSlide>
            <div className="autoplay-progress hidden" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>

    );
};

export default Carousel;
