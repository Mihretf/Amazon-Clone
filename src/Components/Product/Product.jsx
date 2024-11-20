import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css'

function Product() {
  // Initialize products state with an empty array
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.product_container}>
      {/* Render products only if the array is not empty */}
      {products.length > 0 ? (
        products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))
      ) : (
        <p>Loading products...</p> // Display loading message if products array is empty
      )}
    </section>
  );
}

export default Product;
