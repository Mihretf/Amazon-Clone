import React, {useContext,  useState} from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import classes from './Payment.module.css';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from "../../Api/axios";
import {ClipLoader} from "react-spinners";
import { db } from '../../Utility/firebase';
import { doc, setDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


function Payment() {
  const[{ user, basket }] =useContext
  (DataContext);
  const totalItem = basket?.reduce((amount,item) =>{
    return item.amount + amount
  },0);

  const total =basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const [cardError, setCardError] =useState(null);
  const [processing, setProcessing] =useState(false);

  const stripe =useStripe();
  const elements =useElements();
  const navigate =useNavigate();


  const handleChange =(e)=>{

    console.log(e);
    e.error?.message? setCardError( e.error?.message): setCardError("")

  };

  const handllePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
  
      // 1. Backend function: contact server to get client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
  
      const clientSecret = response.data?.clientSecret;
  
      // 2. Confirm the payment on the client side
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      // 3. Save order to Firestore
      const userOrdersCollection = collection(db, "users", user.uid, "orders"); // Get the user's "orders" collection
      const orderDoc = doc(userOrdersCollection, paymentIntent.id); // Reference to a specific order document
  
      await setDoc(orderDoc, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
  
      console.log("Order saved successfully:", paymentIntent.id);
  
      setProcessing(false);
      navigate("/orders", {state: {msg:"You have placed a new order"} });
    } catch (error) {
      console.error("Payment failed:", error);
      setProcessing(false);
    }
  };


  return (
    <LayOut>
      {/* header */}
            <div className={classes.payment__header}>checkout({totalItem}) items</div>
            {/* payment method */}
            <section className={classes.payment}>
              {/* adress */}
              <div className={classes.flex}>
                <h3>Delivery Address</h3>
                <div>
                  <div>{user.email}</div>
                <div>CMC</div>
                <div>Addis Ababa, Eth</div>
                </div>
              </div>
              <hr />

              {/* product */}
              <div className={classes.flex}>
                <h3>Review items and delivery</h3>
                <div>
                  {
                    basket?.map((item)=><ProductCard product={item} flex={true}/>)
                  }
                </div>


              </div>
              <hr />

              {/* card form */}
              <div className={classes. flex}>
                <h3>Payment methods</h3>
                <div className={classes.payment__card__container}>
                  <div className={classes.payment_details}>
                    <form onSubmit={handllePayment}>
                      {/* error */}
                      {cardError && ( <small style={{color: "red"}}>{cardError}</small>)}

                      {/* card element */}
                      <CardElement onChange={handleChange}/>

                      {/* price */}
                      <div className={classes.payment__price}>
                        <div>
                          <span style={{display: "flex", gap: "10px"}}>
                            <p>Total Order | <CurrencyFormat amount={total}/></p>
                             
                          </span>
                        </div>
                        <button type='submit' disabled={processing}>
                        {
                          processing?(
                            <div className={classes.loading}>
                              {console.log("Processing state:", processing)}
                         <ClipLoader color="gray" size={12} />
                         <p>Please wait...</p>
                          </div>


                          ): "Pay Now"

                        }


                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </section>


    </LayOut>
  )
}

export default Payment