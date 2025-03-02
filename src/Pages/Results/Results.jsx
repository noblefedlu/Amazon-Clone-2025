import React, { useEffect, useState } from "react"
import LayOut from "../../Components/LayOut/LayOut"
import { useParams } from "react-router-dom"
import axios from "axios"
import { productUrl } from "../../Api/endpoint"
import ProductCard from "../../Components/Prodcut/ProductCard"
import style from "./Results.module.css"
function Results() {
  const { categoryName } = useParams()
  const [results, setResults] = useState([])
  //   console.log(categoryName)
  useEffect(() => {
    // https://fakestoreapi.com/products/category/jewelery
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res)
        setResults(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "10px" }}>Results</h1>
        <p style={{ padding: "10px" }}>Category/{categoryName}</p>
        <hr />
        
            <div className={style.products_container}>
          {  results?.map((singleProduct)=>{
                return <ProductCard key={singleProduct.id} data={singleProduct}/>
            })}
            </div>
        

      </div>
    </LayOut>
  )
}

export default Results