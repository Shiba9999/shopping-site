import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating,setToast}) {
    //basket from reducer basket normally it state then initial state to basket
    const history = useHistory()
    const [{basket},dispatch]=useStateValue();
    console.log("add to basket",basket);
    
    const addToBasket=()=>{
        const authenticatedtoken = localStorage.getItem("isSignin");
        if(authenticatedtoken!==undefined && typeof authenticatedtoken === "string"){
            dispatch({
                type:"ADD_TO_BASKET",
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                   rating:rating,
                }
            })
            setToast("added to basket!","success");
        }else{
            history.push("/login")
        }
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"> 
                  
                  <small>₨</small>
                  <strong>{price}</strong>
                
                </p>

                <div className="product__rating">
                 
                 {Array(rating).fill().map((_,i) =>(
                     <p>⭐</p>
                 ))}
                </div>
            </div>
            <img  src={image} alt=""/>
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
