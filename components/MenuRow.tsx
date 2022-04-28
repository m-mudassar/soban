import Image from 'next/image'
import React from 'react'

interface MenuRowProps {
    menuItem: string,
    subItem: boolean
}

function MenuRow({ menuItem, subItem }: MenuRowProps) {
  return (
    <div className='flex items-center text-white hover:cursor-pointer'>
        <span className='uppercase font-Oswald font-bold text-lg tracking-wide'>{menuItem}</span> 
        { subItem &&
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        }
    </div>
  )
}

export default MenuRow