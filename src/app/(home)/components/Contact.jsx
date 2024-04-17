'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

import callIcon from '@/public/home/contact/call_icon.png'
import email from '@/public/home/contact/email_icon.png'
import location from '@/public/home/contact/location_icon.png'
import map from '@/public/home/contact/map.png'


const Contact = () => {
    return (
        <>
            <div className='w-[45%]'>
                <div className=''>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='font-roboto font-light text-xl leading-6 relative'>
                            CONTACT
                            <div className='bg-red-600 w-[128px] absolute top-1/2 transform -translate-y-1/2 h-[2px] translate-x-[97px]'></div>
                        </h2>
                        <h3 className='font-roboto font-medium text-[25px] leading-[29.3px]  pb-14 text-[#FF0000] mt-[14px]'>Get in Touch With US</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='bg-[#D9D9D9] h-[172px] w-full flex items-center flex-col py-3'>
                        <Image alt='location' src={location} width={"auto"} height={"auto"} />
                        <div className='text-center'>
                            <p className='mb-[4px] '>Site : Mauje Puri, Dhoregoan, Tal. Gangapur,</p>
                            <p className='mb-[4px] translate-x-10'>Dist. Chh. Sambhajinagar (MS) - 431133</p>
                            <p className='mb-[4px] '>Office : “Gadiya Group”, 3rd Floor, ShreeHari Bldg,</p>
                            <p className='mb-[4px] translate-x-10'>Golwadi-Waluj Link Road, Chh. Sambhajinagar (MS)</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='py-9 flex justify-between w-full'>
                    <div className='py-10 px-[13px] bg-[#D9D9D9] h-[182px] w-[48%] flex flex-col items-center'>
                        <Image alt='email' src={email} width={"auto"} height={"auto"} />
                        <h3 className='font-roboto text-[17px] leading-[19.92px] mt-1' >Email Us</h3>
                        <a className='mt-5 hover:text-red-800 transition-all text-[16px] leading-[16.41px] ' href="mailto:marketing@mangalamwedding.com">marketing@mangalamwedding.com</a>
                    </div>

                    <div className='py-10 px-[13px] bg-[#D9D9D9] h-[182px] flex flex-col items-center w-[48%]' >
                        <Image alt='callIcon' src={callIcon} width={"auto"} height={"auto"} />
                        <h3 className='font-roboto text-[17px] leading-[19.92px] mt-1'>Call Us</h3>
                        <div className='text-center py-2 flex flex-col gap-1'>
                            <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:7091949194"> +91 7091949194</a>
                            <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:9090983636">+91 9090983636</a>
                            <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:8237107177">+91 8237107177</a>

                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='ml-[27px] w-[45%]'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480713.9729875258!2d75.1790864!3d19.7305864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9db3448e5d87%3A0xf042ced887b3d505!2sMangalam%20Wedding%20Destination%20Club!5e0!3m2!1sen!2sin!4v1712477917226!5m2!1sen!2sin"
                    width="100%"
                    height="580"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </motion.div>
        </>
    )
}

export default Contact
