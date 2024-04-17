import React from 'react'
import Image from 'next/image'

import facebook from '@/public/footer/Facebook_black_icon.png'
import instagram from '@/public/footer/Instagram_black_icon.png'
import youtube from '@/public/footer/YouTube_black_icon.png'
import logos from '@/public/footer/Logo.png'
import halfimage from '@/public/footer/Halfimage_icon.png'
import punchline from '@/public/footer/Punchline.png'
import Link from 'next/link'



const Footer = () => {
    return (
        <footer className='h-[449px] w-full flex items-center justify-center pl-[84px] pt-[71] relative bg-black text-white'>
            <div className='flex justify-center items-center w-full'>
                <div className='w-full'>
                    <Image alt='logo' src={logos} width='166' height='41' className='mr-[30px]' />

                    <Image alt='punchline' src={punchline} width='192px' height='38px' className='mt-[67px]' />
                </div>

                <ul className='ml-[55px] mr-[74px] w-full '>  {/* // TODO: give a effect that will show what link is open ( when link is opend li items should be in red text color ) */} 
                    <h2 className='font-medium text-[30px] font-roboto leading-[35.16px] text-[#FF0000] mb-4' >QUICK LINK</h2>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="/" >HOME</Link></li>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="about-us" >ABOUT US</Link></li>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="amenities" >AMENITIES</Link></li>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="membership" >MEMBERSHIP</Link></li>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="master-plan" >MASTER PLAN</Link></li>
                    <li className='mb-[25px] font-medium text-[17px] leading-[19.92px] hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="gallery" >GALLERY</Link></li>
                </ul>

                <ul className='w-full font-roboto text-[15px] leading-[20.58px]'>
                    <h2 className='font-medium text-[30px] font-roboto leading-[35.16px] text-[#FF0000] mb-4 ' >QUICK CONTACT</h2>
                    <li className='mb-[6px] '>Email: <a className='hover:text-red-800 transition-all'  href="mailto:marketing@mangalamwedding.com">marketing@mangalamwedding.com</a></li>
                    <li className='mb-[6px] '>Customer Care: <a className='hover:text-red-800 transition-all' href="tel:9823225546">9823225546</a>, <a className='hover:text-red-800 transition-all' href="tel:9090983636">9090983636</a></li>

                    <div className='w-[410px]'>
                        <p className='mb-[4px] '>Site : Mauje Puri, Dhoregoan, Tal. Gangapur,</p>
                        <p className='mb-[4px] translate-x-10'>Dist. Chh. Sambhajinagar (MS) - 431133</p>
                        <p className='mb-[4px] '>Office : “Gadiya Group”, 3rd Floor, ShreeHari Bldg,</p>
                        <p className='mb-[4px] translate-x-10'>Golwadi-Waluj Link Road, Chh. Sambhajinagar (MS)</p>
                    </div>


                    <ul className='flex gap-[20px] mt-[35px]'>   
                        <li className='hover:bg-red-600 transition-all' ><a href="https://m.facebook.com/MangalamWeddingDestination" target='_blank'><Image alt='facebook' className='hover:invert transition-all hover:cursor-pointer' src={facebook} width='33' height='30' /></a></li>
                        <li className='hover:bg-red-600 transition-all' ><a href="https://www.instagram.com/mangalamweddingdestination/" target="_blank" rel="noopener noreferrer"><Image alt='instagram' className='hover:invert transition-all hover:cursor-pointer' src={instagram} width='33' height='30' /></a></li>
                        <li className='hover:bg-red-600 transition-all' ><a href="https://youtube.com/@mangalamweddingdestinationclub?si=6ydUDO9lXV0Oa8nx" target="_blank" rel="noopener noreferrer"><Image alt='youtube' className='hover:invert transition-all hover:cursor-pointer' src={youtube} width='33' height='30' /></a></li>
                    </ul>
                </ul>

            </div>

            <div className='ml-[167.9px] invisible'>
                <Image alt='halfimage' src={halfimage} width='473px' height='459px' />

            </div>
            <div className='ml-[167.9px] absolute right-0 top-0'>
                <Image alt='halfimage' src={halfimage} width='473px' height='459px' />

            </div>


        </footer>
    )
}

export default Footer
