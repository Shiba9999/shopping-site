const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");
const { request, response } = require("express");
const stripe=require("stripe")("sk_test_51JKlBXSF0fTfXzQmXiUV901ctKUxyD5yYLKNH6ka9lL3lkmx7GWRDo0uGMz4l1rRNr5iiqqK93MZqVqtfLz2tsi900dEVl56yj")


//cmd function to run backend -> firebase emulators:start
//API

//App config
const app=express();
const PORT=process.env.PORT || 8080;

//middleware
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get("/",(request,response)=>response.status(200).send("hello world"))
app.post("/payments/create",async(request,response)=>{
     
    //ita the total from payment ?total
    const total=request.query.total;
    console.log("payment request received",total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//subunits of currency
        currency:"inr",
    });
    //ok-created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})
app.listen(PORT ,console.log(`server is starting at ${PORT}`))
//listen command
exports.api=functions.https.onRequest(app);

//example end point
//http://localhost:5001/shopping-site-37160/us-central1/api
