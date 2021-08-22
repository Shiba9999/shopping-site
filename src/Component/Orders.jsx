import React, { useEffect, useState } from 'react'
import auth, { db } from "../firebase";
import "./Orders.css"
import Order from './Order';

function Orders() {
    const [orders,setOrders]=useState([]);
    const [user,setUser]=useState("");
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
    //7.47
    useEffect(()=>{
        if(user){
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created","desc")
            .onSnapshot(snapshot=>(
                setOrders(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            ))

        }else{
            setOrders([])
        }
      

    },[user]);

  

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="order__order">
                {orders?.map(order=>(
                    <Order order={order}/>
                ))}
            </div>

        </div>
    )
}

export default Orders
