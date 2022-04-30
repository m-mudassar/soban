import Image from 'next/image'
import React from 'react'
import Button from './Button'

function About() {
  return (
    <div>
        <div>
          <Image src='/static/images/about.png' width={1266} height={490} alt='' />
          {/* <div className='flex items-center w-[1266px] h-[490px]'>
            <div className='bg-black h-28 w-24 text-center p-5'>
              <Image src={'/static/icons/number1.png'} width={38} height={28} alt='' />
               <p className='uppercase text-white font-Oswald font-normal text-xs'>assembled in <br /> the usa</p> 
            </div>
            <div>
              <p></p>
            </div>
          </div> */}

          <div className='relative'>
            <Button title='about us' link='/' />
          </div>
        </div>
    </div>
  )
}

export default About