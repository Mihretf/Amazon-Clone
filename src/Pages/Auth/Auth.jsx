import React, {useState, useContext} from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import {Link} from 'react-router-dom';
import classes from './SignUp.module.css';
import {auth} from "../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function Auth() {
const [email, setEmail]= useState("");
const [password, setPassword]=useState("");
const [error, setError] =useState("");
const [{user}, dispatch] =useContext(DataContext);

const authHandler = async(e) => {
  e.preventDefault();
  console.log(e.target.name);

  if(e.target.name == "signIn"){
    signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      console.log(user);
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })
    }).catch((err)=>{
      console.log(err);
    })

  }else{
    createUserWithEmailAndPassword(auth, email, password).then
    ((userInfo)=>{
      console.log(user);
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
};


//console.log(password,email);
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
              <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email"  id="email" />
            </label>
          </div>

          <div>
            <label htmlFor="password"> Password:

              <input  value={password} onChange={(e)=>setPassword(e.target.value)}type="password"  id="password" />
            </label>
          </div>
          <button  
          type= "submit" 
          name="signIn"
          onClick={authHandler}
          className={classes.login__signInButton}>
            Sign In
          </button>

        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
         type= "submit" 
         name="signUp"
         onClick={authHandler} 
         className={classes.login__registerButton}> Create your Amazon Account          
        </button>


      </div>

      
    </section>

  
  )
}

export default Auth