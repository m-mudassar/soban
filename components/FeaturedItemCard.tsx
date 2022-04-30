import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface ItemProps{
  src: string,
  model: string,
  price: string,
  discount: string,
  rating: number,
  ratingCount: number,
}

function FeaturedItemCard({src, model, price, discount, rating, ratingCount}: ItemProps) {

    let arr = []

    for(let j=0; j< rating; j++){
      arr.push(<svg className="w-5 h-5 text-[#FEBD11] hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
    }
    for(let i=0; i< 5-rating; i++){
      arr.push(<svg className="w-5 h-5 text-gray-200 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
    }


  return (
    <div className='flex flex-col bg-white rounded shadow-[0px_4px_20px_rgba(0,0,0,0.1)]'>
      <div className='p-10 '>
        <Image src={src} width={195} height={167} alt='' />
      </div>

      <div className='pb-10'>
        <p className='bg-[#FEBD11] text-right w-4/5'>
          <span className='text-black font-Oswald font-normal text-lg uppercase'>{model}</span>
        </p>
      </div>

      <div>
        <p className='text-center'>
          <span className='font-Oswald font-normal text-2xl text-[#FEBD11] uppercase'>{price}</span>
        </p>
      </div>

      <div>
        <p className='font-Oswald font-light p-4 text-center text-sm text-black uppercase line-through'>
          {
            discount ?
            <span>
              {discount}
            </span>
            :
            <br/>
          }
        </p>
      </div>

      <div className="flex items-center text-center justify-center pb-5">
        {
          arr.map((item, index) => { 
            return <span key={index}>{item}</span>
          })
        }  
        <span className='font-Oswald font-light text-sm text-black'> ({ratingCount})</span>
      </div>
 
      <div className='text-center pb-10'>
        <Button title='Details' link='/'/>
      </div>
    </div>
  )
}

export default FeaturedItemCard