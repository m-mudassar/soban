import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
  src: string,
  title: string,
}

function ProductCard({src, title}: ProductCardProps) {
  return (
    <div>
      <Image width={623} height={490} alt='' src={src} />
    </div>
  )
}

export default ProductCard