//demo

// import { createContext, useContext, useReducer } from "react";
// import { initialState, reducer } from "./reducer";

// export const BasketContext = createContext();

// export const ContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <BasketContext.Provider value={{ state, dispatch }}>
         
//          {/* wrap component are children */}
         
//             {children}

//         </BasketContext.Provider>
//     )
// }


// //custom hook to use basket context

// export const useBasket = () => {

//     return useContext(BasketContext)

// }

//for amazon here

import React, { createContext,useReducer,useContext }  from "react"

 export const StateContext=createContext();

 export const StateProvider =({reducer,initialState,children})=>(

     <StateContext.Provider value={ useReducer(reducer, initialState)} >
      {children}
     </StateContext.Provider>
    
 );

 export const useStateValue=()=>useContext(StateContext)