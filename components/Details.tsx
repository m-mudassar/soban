import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Details() {
  return (
    <div>
      <div className="flex justify-evenly space-x-5">
        <div className="h-[566px]">
          <div className="flex h-32 w-[566px] items-center justify-center rounded-t rounded-bl bg-black">
            <p className="font-Oswald text-2xl font-normal uppercase text-white">
              bring the t-boss 410 home for no money down
            </p>
          </div>
          <div>Text</div>

          <div className="my-5 grid grid-cols-3 gap-3">
            <div className="flex h-[213px] flex-col items-center justify-center rounded bg-black">
              <p className="font-Oswald text-5xl font-normal uppercase text-[#FEBD11]">
                $0
              </p>{' '}
              <br />
              <p className="text-center font-Oswald text-2xl font-normal uppercase text-white">
                no money <br /> down
              </p>
            </div>
            <div className="flex h-[213px] flex-col items-center justify-center rounded bg-black">
              <p className="font-Oswald text-5xl font-normal uppercase text-[#FEBD11]">
                $721<sub className="text-sm">/mo</sub>
              </p>{' '}
              <br />
              <p className="text-center font-Oswald text-2xl font-normal uppercase text-white">
                for 12 monthly <br /> payments
              </p>
            </div>
            <div className="flex h-[213px] flex-col items-center justify-center rounded bg-black">
              <p className="font-Oswald text-5xl font-normal uppercase text-[#FEBD11]">
                0%
              </p>{' '}
              <br />
              <p className="text-center font-Oswald text-2xl font-normal uppercase text-white">
                apr <br /> financing
              </p>
            </div>
          </div>

          <div className="flex h-32 items-center justify-end bg-black pr-28">
            <Image
              src="/static/icons/affirm.png"
              width={96}
              height={46}
              alt=""
            />
          </div>
        </div>

        <div className="">
          <Image
            src="/static/images/details1.png"
            width={623}
            height={566}
            alt=""
          />
        </div>
      </div>

    <div className='text-center'>
      <div className='py-5 inline-flex items-center justify-center space-x-3'>
        <p className="font-Oswald text-2xl font-normal uppercase text-black inline">
          be prepared for wherever life takes you
            
        </p>
            <Button title='Details' link='/' />
      </div>
    </div>
    </div>
  )
}

export default Details
