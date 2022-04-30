import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    title: string,
    link: string
}

function Button({ title, link }: ButtonProps) {
  return (
    <div>
      <button className='bg-[#FEBD11] w-52 py-2 uppercase'>
        <Link href={link}>
          <a href={link}>{title}</a>
        </Link>
      </button>
    </div>
  )
}


export default Button