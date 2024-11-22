import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { img } from '../Carousel/img/data';
import classes from './Product.module.css';
import {Link} from 'react-router-dom';

function ProductCard({ product }) {  // Destructure 'product' prop correctly
    const { image, title, id, rating = {}, price } = product;  // Default empty object for rating
    const { rate = 0, count = 0 } = rating;  // Default values for rate and count

    return (
        <div className={classes.card_container}>
            <Link to={`product/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <h3>{title}</h3>
                <div className={classes.rating}>
                    <Rating value={rate} precision={0.1} />
                    <small>{count}</small>
                </div>
                <div className={classes.price}>
                    <CurrencyFormat amount={price} />
                </div>
                <button className={classes.button}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
