import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Auth from './Pages/Auth/Auth';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';

const stripePromise =loadStripe(
"pk_test_51QTX2aKvTXKcV3Xe3wTE01uwewBbe8PV2CT8N6KFXF2MqoCVVSMKYEygEEVGRBG6n9A1MAC9QY8JuEA3x60Xu6ut00NV0aO8L0"
);
  

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Route definitions */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Payment" element={
          <Elements stripe={stripePromise}>
                      <Payment /> </Elements>
}
/>
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/product/:productId" element={<ProductDetail />} />


        <Route path="/carts" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
