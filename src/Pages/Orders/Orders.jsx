import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { collection, query, orderBy, onSnapshot, doc } from "firebase/firestore";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Replace db.collection(...) with the modular Firestore approach
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      // Real-time listener for Firestore
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
             
          })

          ))
      });
    } else{
      setOrders([])

    }
  }, []);
 
 return (
    <LayOut>
<section className={classes.container}>
  <div className={classes.orders__container}>
    <h2>Your Orders</h2>
    {orders?.length == 0 && <div style={{padding: "20px"}}>
      You don't have orders yet.
    </div>

    }
    {/* ordered items */}
    <div>{
      orders?.map((eachOrder, i)=>{



        return(
          <div key={i}>
            <hr />
            <p>Order ID: {eachOrder?.id} </p>
            {
              eachOrder?.data?.basket?.map(order =>(
                
                <ProductCard
                flex={true}
                product={order}
                key={order.id}
                
                />

              ))
            }
          </div>
        )


      })
      }

    </div>
  </div>
</section>
    </LayOut>
  )
}

export default Orders