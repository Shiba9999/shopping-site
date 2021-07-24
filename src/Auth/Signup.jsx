import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Signup.css";
import auth from "../firebase";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const signUp = (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
        console.log(authUser);
        setLoader(false);
        history.push("/login");

        setEmail("");
        setPassword("");
      });
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="signup">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
        <div className="signup__container">
          <h1>Sign-up</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="signup__signInButton"
              type="submit"
              onClick={signUp}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
