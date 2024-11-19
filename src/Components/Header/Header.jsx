import React from 'react';
import classes from './header.module.css';
import LowerHeader from './LowerHeader';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';

const Header = () => {
  return (
    <section>
      <div className={classes.header_container}>
        {/* Left Section: Logo and Delivery */}
        <div className={classes.logo_container}>
          <a href="/">
            <img
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* Sign In Section */}
            <a href="/signin">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            {/* Orders Section */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            {/* Cart Section */}
            <a href="" className={classes.cart}>
              <CiShoppingCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </div>

      <LowerHeader/>

    </section>

  

  );
};

export default Header;
