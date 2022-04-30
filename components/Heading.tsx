import React from 'react'

interface HeadingProps {
    title: string
}

function Heading({title}: HeadingProps) {
  return (
    <div className='flex justify-center'>
        <p className='text-black font-Oswald font-normal text-2xl'>
            <span className='bg-[#FEBD11] p-[1px] uppercase'>{title}</span>
        </p>
    </div>
  )
}

export default Heading