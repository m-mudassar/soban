import Image from 'next/image'
import React from 'react'
import Button from './Button'

function About() {
  return (
    <div>
        <div className='bg-[url("/static/images/about.png")] w-full h-[490px] bg-cover bg-center'>
          <div className='flex justify-end space-x-3 pr-28'>
            <div className='bg-black h-32 w-24 text-center p-5 pb-10 rounded-b'>
              <Image src={'/static/icons/number1.png'} width={38} height={28} alt='' />
               <p className='uppercase text-white font-Oswald font-normal text-xs mt-2 mb-2'>assembled in <br /> the usa</p> 
            </div>
            <div className='bg-black h-36 w-24 text-center p-5 pb-10 rounded-b'>
              <Image src={'/static/icons/home-cols.png'} width={38} height={28} alt='' />
               <p className='uppercase text-white text-center font-Oswald font-normal text-xs mt-2 mb-2'>1 year parts & <br /> labor <br /> warranty</p> 
            </div>
          </div>

          <div className='flex justify-center mt-52'>
            <Button title='about us' link='/' />
          </div>
        </div>
    </div>
  )
}

export default About