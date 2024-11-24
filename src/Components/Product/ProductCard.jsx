import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { img } from '../Carousel/img/data';
import classes from './Product.module.css';
import {Link} from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { type } from '../../Utility/action.type'


function ProductCard({ product,flex,renderDesc, renderAdd}) {  // Destructure 'product' prop correctly
    const { image, title, id, rating, price, description, } = product; 
    
    const [state,dispatch]=useContext(DataContext)

    const addToCart =()=>{
        console.log(`Add to cart clicked`);
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                image, title, id, rating, price, description
            }
        })
    }






    return (
        <div className={`${classes.card_container} ${flex?classes.products__flexed : ''}` }>
            <Link to={`/product/${id}`}>
                <img src={image} alt="" className={classes.img_container} />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>}
                <div className={classes.rating}>
                    <Rating value={rating?.rate} precision={0.1} />
                    <small>{rating?.count}</small>
                </div>
                <div className={classes.price}>
                    <CurrencyFormat amount={price} />
                </div>
                
                {
                renderAdd && <button className={classes.button} onClick={addToCart}>
                Add to Cart
            </button>

                }

                
            </div>
        </div>
    );
}

export default ProductCard;
