import React from 'react'
import Button from './Button'
import Heading from './Heading'

function Location() {
  return (
    <div className='mt-10'>
        <div className='bg-[url("/static/images/location.png")] w-full h-[612px] bg-cover bg-center'>
            <div className='flex flex-col items-center justify-center space-y-5 h-[612px]'>
                <div>
                    <Heading title='FIND A LOCATION' />
                </div>
                <div>
                    <p className='font-Oswald font-normal text-lg pb-5 text-white uppercase'>
                        FIND THE NEAREST DEALER OF SERVICE CENTER
                    </p>
                </div>
                <div>
                    <Button title='find' link='/' />
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Location