import React from 'react'
import Category from '../../Components/Category/Category'

import Product from '../../Components/Product/Product'
import LayOut from '../../Components/LayOut/LayOut'
import Carousel from '../../Components/Carousel/Carousel'

function Landing() {
  return (
    <LayOut>
        <Carousel/>
        <Category/>
        <Product/>
    </LayOut>
  )
}

export default Landing