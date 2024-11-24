import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loader'; // Import the Loader component

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching data

    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <section className={classes.product_container}>
      {isLoading ? (
        <div className={classes.loader_container}>
          <Loader /> {/* Display loader while fetching data */}
        </div>
      ) : (
        products.map((singleProduct) => (
          <ProductCard renderAdd={true}
          product={singleProduct} key={singleProduct.id} />
        ))
      )}
    </section>
  );
}

export default Product;
