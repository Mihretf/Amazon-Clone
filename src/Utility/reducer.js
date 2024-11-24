import React, { useContext } from 'react';
import LayOut from '../Components/LayOut/LayOut';
import { DataContext } from '../Components/DataProvider/DataProvider';
import ProductCard from '../Components/Product/ProductCard';
import {reducer, initialState} from '../Utility/action.type'

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  // Calculate the subtotal by summing the price * amount for each item in the basket
  const subtotal = basket?.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                  />
                );
              })
            )
          }
        </div>

        {/* Subtotal Section */}
        <div>
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
