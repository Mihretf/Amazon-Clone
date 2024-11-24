import React, { useContext } from 'react';
import classes from './header.module.css';
import LowerHeader from './LowerHeader';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import {Link} from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
const [{basket},dispatch] =useContext(DataContext)
const totalItem = basket?.reduce((amount,item) =>{
  return item.amount + amount
},0)


  return (

    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* Left Section: Logo and Delivery */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Right Section: Search, Language, Sign In, Orders, Cart */}
        <div className={classes.right_section}>
          <div className={classes.search}>
            {/* Search bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search products" />
            <CiSearch size={25} />
          </div>

          <div className={classes.order_container}>
            {/* Language Selector */}
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* Sign In Section */}
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            {/* Orders Section */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart Section */}
            <Link to="/carts" className={classes.cart}>
              <CiShoppingCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </div>

      <LowerHeader/>

    </section>

  

  );
};

export default Header;
