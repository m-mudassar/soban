import React from 'react'
import FeaturedItemCard from './FeaturedItemCard'
import Heading from './Heading'

function FeaturedItems() {
  return (
    <div>
        <div>
            <Heading title='featured items' />
        </div>

        <div className='grid grid-cols-4 gap-8 py-10'>
          <FeaturedItemCard 
          src='/static/images/featured/item1.png' 
          model='BUCK 450 2021'
          price='$7,999.99'
          discount=''
          rating={0}
          ratingCount={0}
           />
          <FeaturedItemCard 
          src='/static/images/featured/item2.png' 
          model='BUCK 250 2021'
          price='$4,999.99'
          discount='$5,499.99'
          rating={0}
          ratingCount={0}
           />
          <FeaturedItemCard 
          src='/static/images/featured/item3.png' 
          model='MPS-300W'
          price='$319.00'
          discount='$349.00'
          rating={4}
          ratingCount={13}
           />
          <FeaturedItemCard 
          src='/static/images/featured/item4.png' 
          model='12V Ride-on'
          price='$349.99'
          discount='$379.00'
          rating={0}
          ratingCount={0}
           />
        </div>
    </div>
  )
}

export default FeaturedItems