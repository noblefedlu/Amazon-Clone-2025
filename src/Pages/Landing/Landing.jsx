import React from 'react'
import  Carousel  from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'
import RecommendationSignIn from '../../Components/RecommendationSignIn/RecommendationSignIn'
import LayOut from '../../Components/LayOut/LayOut'

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Catagory />
      <Product />
      <RecommendationSignIn/>
    </LayOut>
  )
}

export default Landing
