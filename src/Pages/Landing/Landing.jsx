import React from 'react'
import  CarouselEffect  from '../../Components/Carouseal/CarouselEffect'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Prodcut/Product'
import LayOut from '../../Components/LayOut/LayOut'

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  )
}

export default Landing