import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader'; // Import Loader

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching data

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Stop loading if there's an error
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <div className={classes.loader_container}>
            <Loader /> {/* Display loader while fetching data */}
          </div>
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
               key={product.id} 
               product={product}
               renderDesc={false}
               renderAdd={true} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
