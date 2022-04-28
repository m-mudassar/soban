import Image from 'next/image'
import React from 'react'
import MenuRow from './MenuRow'

function NavBar() {
  return (
    <div className='flex justify-between items-center h-20 bg-black'>
        <div className='pl-20'>
          <Image src='/logo.png' width={164} height={48} alt='' />  
        </div>
        <div className='flex items-center space-x-5 pr-12'>
          <MenuRow menuItem='side by sides' subItem={true} />
          <MenuRow menuItem='atvs' subItem={true}/>
          <MenuRow menuItem='motorcycles' subItem={true}/>
          <MenuRow menuItem='golf' subItem={true}/>
          <MenuRow menuItem='go kart' subItem={true}/>
          <MenuRow menuItem='snow' subItem={false}/>
          <MenuRow menuItem='accessories' subItem={false}/>
          <MenuRow menuItem='warranty' subItem={false}/>
        </div>
    </div>
  )
}

export default NavBar