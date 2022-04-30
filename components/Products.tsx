import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard'

function Products() {
  return (
    <div>
        <div>
          <Heading title='Other Products' />
        </div>

        <div className='flex items-center justify-between space-x-5 my-10'>
          <ProductCard src='/static/images/products/product-1.png' title='RVs' />
          <ProductCard src='/static/images/products/product-2.png' title='Sport UTVs' />
        </div>
    </div>
  )
}

export default Products