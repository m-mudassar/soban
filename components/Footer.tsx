import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

import Heading from './Heading'

function Footer() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center space-y-5 border-b-2 border-b-[#FEBD11] bg-black h-44'>
            <div>
                <Heading title='stay connected' />
            </div>
            <div>
                <div className="flex flex-row">
                    <input
                        className="font-Oswald font-normal text-sm h-16 text-[#B3B3B3] w-full py-1 pl-10 pr-28 outline-none uppercase"
                        type="text" placeholder="enter email address" />
                    <span className="flex items-center bg-[#FEBD11] border-0 px-3">
                        <button className="bg-[#FEBD11] text-black uppercase py-3 px-6 ">
                            Search
                        </button>
                    </span>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between px-64 py-20 border-b-2 border-b-[#FEBD11] bg-black'>
            <div className='flex flex-col justify-center space-y-5 text-center text-white'>
                <p className='font-Oswald font-bold text-lg'>COMPANY </p >
                <p className='font-Oswald font-normal text-sm uppercase'>About us</p>
                <p className='font-Oswald font-normal text-sm uppercase'>Career </p>
                <p className='font-Oswald font-normal text-sm uppercase'>News/Blog</p>
                <p className='font-Oswald font-normal text-sm uppercase'>Contact us</p>
                <p className='font-Oswald font-normal text-sm uppercase'>Warranty</p>
                <p className='font-Oswald font-normal text-sm uppercase'>Find a dealer</p>
                <p className='font-Oswald font-normal text-sm uppercase'>Find a service center</p>
            </div>

            <div className='flex flex-col space-y-5'>
                <div>
                    <Image src='/logo.png' height={48} width={164} alt='logo' />
                </div>

                <div className='flex justify-center space-x-2'>
                 <SocialIcon url="https://twitter.com" network="twitter" bgColor='#FEBD11' style={{ width: 26, height:26 }} />
                 <SocialIcon url="https://facebook.com" network="facebook" bgColor='#FEBD11' style={{ width: 26, height:26 }} />
                 <SocialIcon url="https://youtube.com" network="youtube" bgColor='#FEBD11' style={{ width: 26, height:26 }} />
                 <SocialIcon url="https://instagram.com" network="instagram" bgColor='#FEBD11' style={{ width: 26, height:26 }} />
                </div>

                <div>
                    <div className='flex flex-col justify-center space-y-3 text-center text-white'>
                        <p className='font-Oswald font-bold text-lg uppercase'>PRODUCTS </p >
                        <p className='font-Oswald font-normal text-sm uppercase'>Sxs</p>
                        <p className='font-Oswald font-normal text-sm uppercase'>Atvs</p>
                        <p className='font-Oswald font-normal text-sm uppercase'>Motorcycles</p>
                        <p className='font-Oswald font-normal text-sm uppercase'>Parts</p>
                        <p className='font-Oswald font-normal text-sm uppercase'>Accessories</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col justify-center space-y-3 text-center text-white'>
                    <p className='font-Oswald font-bold text-lg uppercase'>TERMS AND CONDITIONS </p >
                    <p className='font-Oswald font-normal text-sm uppercase'>Terms of use</p>
                    <p className='font-Oswald font-normal text-sm uppercase'>Privacy Policy</p>
                    <p className='font-Oswald font-normal text-sm uppercase'>Support</p>
                    <p className='font-Oswald font-normal text-sm uppercase'>Financing</p>
                    <p className='font-Oswald font-normal text-sm uppercase'>Massimo Giveaway</p>  
                </div>
                <p className='absolute text-right text-white overflow-visible mt-5'>
                    <span className='font-Oswald font-bold text-sm'>CONTACT</span>
                    <span className='font-Oswald font-normal text-sm text-[#FEBD11]'> M - F 8:30am - 5:30pm CST | (877) 881-6376 <br /> customerservice@massimomotor.com</span>
                </p>    
            </div>
        </div>

        <div className='flex items-center justify-center bg-black h-16'>
            <p className='font-Roboto font-normal text-sm text-white'>© 2021 Massimo Motor Sports, LLC</p>
        </div>
    </div>
  )
}

export default Footer