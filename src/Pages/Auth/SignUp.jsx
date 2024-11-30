import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import {Link} from 'react-router-dom'
import classes from './SignUp.module.css'

function Auth() {
  return (
    
    <section className={classes.login}>
      {/* logo */}

      <Link >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
              alt="amazon logo"
            />
          </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action=""> 

          <div>
            <label htmlFor="email"> Email:
              <input type="email"  id="email" />
            </label>
          </div>

          <div>
            <label htmlFor="password"> Password:

              <input type="password"  id="password" />
            </label>
          </div>
          <button className={classes.login__signInButton}>
            Sign In
          </button>

        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className={classes.login__registerButton}> Create your Amazon Account          
        </button>


      </div>

      
    </section>

  
  )
}

export default Auth