import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Payment from "./Component/Payment";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { useBasket } from './Component/ContextProvider';

const promise =loadStripe("pk_test_51JKlBXSF0fTfXzQmz8oyamafVqI0qWsTtJPkWnPtvXxqklD1TIe0sU00gnLwdrb7gt17lAP3czU490DKhOB2wuvr00wq20k2M8");

function PrivateRoute(props) {
  const authenticatedtoken = localStorage.getItem("isSignin");
  return authenticatedtoken ? (
    <Route {...props}></Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}
function App() {
  // const {state,dispatch} = useBasket();
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <PrivateRoute path="/checkout">
          <Header />
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/payment">
          <Header />
          <Elements stripe={promise} >
          <Payment/>
          </Elements>
    
        </PrivateRoute>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
    //   <>
    //   <p>{state.count}</p>
    //  <button  onClick={()=>{
    //    dispatch({type:"INCREASE_COUNT",payload:10})
    //  }}>press</button>
    //   </>
  );
}

export default App;
