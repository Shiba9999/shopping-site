import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">

            <div className="checkout__left">
                
                  <img className="checkout__ad"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQEy4Rt240oUWfYrFUNSlPN1bIuM45kNmsVgyKzdI3lpq-u-TcEP01n4TD9gcLLeNaQ&usqp=CAU"
                  
                  />
                 <div>
                     <h2 className="checkout__title">
                         your shopping basket
                     </h2>

                     {/* <CheckoutProduct
                      id="5"
                      title="test"
                      image="https://images.booksense.com/images/326/249/9781984249326.jpg"
                      price="999"
                      rating={5}
                     
                     
                     /> */}
                  {console.log(basket)}
                  {  basket.map(item=>{
                    
                     return <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      
 
                      />
                  })}

                 </div>

                 
            </div>

            <div className="checkout__right">
                       <Subtotal/>
            </div>
             
        </div>
    )
}

export default Checkout
