import React, {useState, useContext} from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './SignUp.module.css';
import {auth} from "../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {ClipLoader} from "react-spinners";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function Auth() {
const [email, setEmail]= useState("");
const [password, setPassword]=useState("");
const [error, setError] =useState("");

const [loading, setLoading] = useState ({
  signIn:false,
  signUp:false,
});



const [{user}, dispatch] =useContext(DataContext);
const navigate= useNavigate()
const navStateData = useLocation();
console.log("Navigation state data:", navStateData.state);



const authHandler = (e) => {
  e.preventDefault();
  console.log(e.target.name);

  setError(""); // Clear any previous error

  if (e.target.name === "signIn") {
    setLoading({ ...loading, signIn: true });

    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo.user);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false }); 
        navigate(navStateData?.state?.redirectTo || "/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signIn: false }); 
      });

  } else if (e.target.name === "signUp") {
    setLoading({ ...loading, signUp: true });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo.user);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false }); 
        navigate("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signUp: false }); 
      });
  }
};



//console.log(password,email);
  return (
    
    <section className={classes.login}>
      {/* logo */}

      <Link to={"/"} >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
              alt="amazon logo"
            />
          </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        { navStateData?.state?.msg && (
          <small 
          style ={{
            padding:"5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",

          }

          }>
            {navStateData?.state?.msg}

          </small>
          
        )
        

        }
        
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
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ): (
              "Sign In"
            )}
          

          </button>

        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
         type= "submit" 
         name="signUp"
         onClick={authHandler} 
         className={classes.login__registerButton}>
           {loading.signUp ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ): (
              "Create your Amazon Account"          

            )}
          
          
                   
        </button>
        {
          error && <small  style ={{paddingTop: "5px" ,color:"red"}}>
            {error}
          </small>
        }


      </div>

      
    </section>

  
  )
}

export default Auth