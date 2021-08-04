import React, { useEffect  } from "react";
import { useStateValue } from "./StateProvider";
import auth from "../firebase";
import { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css"
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";
function Payment() {
    const [{basket},dispatch]=useStateValue();
    const [user,setUser]=useState("");
    const [error,setError]=useState(null);
    const [processing,setProcessing]=useState("")
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [clientSecret,setClientSecret]=useState(true);
  
    const history=useHistory();
    const stripe=useStripe();
    const elements=useElements();


useEffect(()=>{
    const getClientSecret=async ()=>{
        const response=await axios({
            method:"post",
            //stripe expects the total in a currencies subunits
            url:`/payments/create?total=${getBasketTotal(basket)}`
        });
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
    
},[basket])
console.log(clientSecret);

   const handleSubbmit=(async(event)=>{
       event.preventDefault();
       //one click block if some one click 5 times payment__priceContainer>button logic is for that
       setProcessing(true);
       const payload=await stripe.confirmCardPayment(clientSecret,{
           payment_method:{
               card:elements.getElement(CardElement)
           }
       }).then(({paymentIntent})=>{
           //paymentIntent =payment conformation
           setSucceeded(true);
           setError(null)
           setProcessing(false)
           history.replace("/orders");

       })


    //do all the fancy stuff...
  
   })
   const handleChange =((event)=>{
       //listen for changes in the card elements
       //and display any error as the customer types their card details
       setDisabled(event.empty);
       setError(event.error?event.error.message:"");
    
   })

    useEffect(() => {
       auth.onAuthStateChanged((user)=>{
           if (user){
               setUser(user)
               console.log(user);
           }
           else{
               console.log("none");
           }
       })
    }, []);


  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
              Checkout (<Link to="/checkout">{basket?.length} items</Link> )
          </h1>
          {/* delivery address */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery address</h3>

            </div>
            <div className="payment__address">
                <p> {user?.email}</p>
                <p>64, Janpath</p>
                <p>New Delhi , India</p>

            </div>

        </div>
        {/* review items */}
        <div className="payment__section">
        <div className="payment__title">
                <h3>Review items and Delivery</h3>

            </div>
            <div className="payment__items">
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* stripe  */}
                <form onSubmit={handleSubbmit}>
                    <CardElement   onChange={handleChange} />
                    <div className="payment__priceContainer">
                        <CurrencyFormat
                         renderText={(value)=>(
                             <>
                             <h3>Order Total :{value}</h3>
                             </>
                         )}
                         decimalScale={2}
                         value={getBasketTotal(basket)}
                         displayType={"text"}
                         thousandSeparator={true}
                         prefix={"₨"}
                        />
                        <button disabled={processing || disabled || succeeded} >
                            <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
