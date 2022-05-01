import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Banner() {
  return (
    <div className='flex justify-between items-center space-x-3 py-10'>
        <div className='flex flex-col space-y-3'>
          <p className='text-white font-Roboto font-normal text-sm'>
            <span className='bg-black p-[1px]'>&nbsp;Whether Checking The Blinds&nbsp;</span>
          </p>
          <p className='text-white font-Roboto font-normal text-sm'>
            <span className='bg-black p-[1px]'>&nbsp;Or Riding The Trails&nbsp;</span>
          </p>
          <p className='text-black font-Oswald w-80 block font-normal text-2xl'>
            <span className='bg-[#FEBD11] p-1'>The Compact T-BOSS 410 Delivers</span>
          </p>

          <Button title={'Shop Now'} link={'/'} />

          <Image src='/static/images/tire.png' className='absolute' width='100px' height='100%' alt='' />  
        </div>

        <div className='flex items-center space-x-5'>
          <div >
            <Image src='/static/images/banner/banner1.png' width={59} height={472} alt='' />
          </div>
          <div><Image src='/static/images/banner/banner2.png' width={59} height={472} alt='' /></div>
          <div><Image src='/static/images/banner/banner3.png' width={733} height={472} alt='' /></div>
        </div>
    </div>
  )
}

export default Banner