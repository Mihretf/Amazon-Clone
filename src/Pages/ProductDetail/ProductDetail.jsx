import React, { useEffect, useState } from 'react'
import classes from './Product.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'

function ProductDetail() {
  const {productId} =useParams()
  const [product, setproduct] = useState({})
  useEffect (()=>{
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res.data);
      setproduct(res.data)

    }).catch((err)=>{
      console.log(err);
    });
    }, [])
  
  return (
    <LayOut>
      <ProductCard 
      product={product} />

    </LayOut>
  )
}

export default ProductDetail