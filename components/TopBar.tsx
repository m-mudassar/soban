import Image from 'next/image'
import React from 'react'

function TopBar() {
  return (
    <div className='flex justify-between items-center h-20 bg-[#FFFBEF]'>
        <div className='flex space-x-4 pl-12'>
            <div className='flex items-center space-x-1'>
                <Image src='/static/images/icons/service.png' width={19} height={16} alt='logo' className='h-4' /> 
                <span className='font-Roboto font-normal text-lg text-black'>Service Centers</span>
            </div>
            <div className='flex items-center space-x-1'>
                <Image src='/static/images/icons/pin.png' width={11} height={16} alt='logo' className='h-4'/> 
                <span className='font-Roboto font-normal text-lg text-black'>Dealers</span>
            </div>
            <div className='flex items-center space-x-1'>
                <Image src='/static/images/icons/phone.png' width={16} height={16} alt='logo' className='h-4'/> 
                <span className='font-Roboto font-normal text-lg text-black'>Contact Us</span>
            </div>
            <div className='flex items-center space-x-1'>
                <Image src='/static/images/icons/info.png' width={16} height={16} alt='logo' className='h-4'/> 
                <span className='font-Roboto font-normal text-lg text-black'>About Us</span>
            </div>
        </div>

        <div>
            <p className='font-Roboto font-bold text-sm tracking-widest text-[#D99F05]'>POWERFUL | AFFORDABLE | RELIABLE</p>
        </div>

        <div className='flex items-center pr-12 space-x-5   '>
            <div className='flex space-x-2 border-b-2 border-black p-2'>
                <Image src='/static/images/icons/search.png' width={16} height={16} alt='logo' className='h-8'/> 
                <input type='search' placeholder='Search' className='outline-0 bg-transparent' />
            </div>

            <div className='flex items-center space-x-2'>
                <div className='flex items-center space-x-1 hover:cursor-pointer'>            
                    <Image src='/static/images/icons/user.png' width={14} height={16} alt='logo' className='h-8'/> 
                    <span className='font-Roboto text-sm'>Login</span></div>
                <div className='flex items-center space-x-1  hover:cursor-pointer'> 
                    <Image src='/static/images/icons/fingerprint.png' width={14} height={16} alt='logo' className='h-8'/> 
                    <span className='font-Roboto text-sm'>Register</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar