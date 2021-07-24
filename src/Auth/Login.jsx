import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.css"
import auth from '../firebase';

function Login(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
  const history =useHistory();
    const handleSubmit=async(e)=>{
        e.preventDefault();
         try{
         auth.signInWithEmailAndPassword(email,password).then((authUser)=>{
             localStorage.setItem("isSignin",true);
             history.push("/");
         })
         }catch(err){
             setEmail("");
             setPassword("");
         }
    }

    return (
        <div className="login">

            <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            
            
            />
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" onChange={(e)=>{
                        setEmail(e.target.value);
                    }} ></input>
                    <h5>Password</h5>
                    <input type="password" onChange={(e)=>{
                        setPassword(e.target.value);
                    }} />
                    <button className="login__signInButton" type="submit" onClick={handleSubmit}>SignIn</button>

                </form>
                <p>Don't have an account signup</p>
                
                 <Link to="/signup">
                <button className="Signin_button">Create Your Amazon Account</button>
                </Link>


            </div>
             
        </div>
    )
}

export default Login
