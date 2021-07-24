import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from "./Component/Home"
import { Switch, Route, BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import Checkout from './Component/Checkout';
import Login from './Auth/Login';
import Signup from "./Auth/Signup"
// import { useBasket } from './Component/ContextProvider';
function PrivateRoute(props) {
  const authenticatedtoken = localStorage.getItem("isSignin");
  return authenticatedtoken ? <Route {...props}></Route> : <Redirect to="/login"></Redirect>
}
function App() {
  // const {state,dispatch} = useBasket();
  return (
    <Router>
     
        <Switch>
        <Route path="/login">
           <Login/>
          </Route>
          <Route path="/signup">
           <Signup/>
          </Route>

          <PrivateRoute path="/checkout">
            <Header />
            <Checkout/>
          </PrivateRoute>

          <PrivateRoute path="/">
            <Header />
            <Home />
          </PrivateRoute>

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
