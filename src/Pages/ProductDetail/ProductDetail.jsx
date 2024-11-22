import React, { useEffect, useState } from 'react';
import classes from './Product.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader'; // Import the Loader component

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Start loading
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false); // Stop loading
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <div className={classes.loader_container}>
          <Loader /> {/* Display loader while data is being fetched */}
        </div>
      ) : (
        <ProductCard product={product} /> 
      )}
    </LayOut>
  );
}

export default ProductDetail;
