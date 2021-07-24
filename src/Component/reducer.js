export const initialState = {
    basket: [],
    count: 0
}
//this state refer to the stateprovider initial state line 35 in stateprovider
//Selector
//reduce map through basket array 
//0 is the initial amount

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=> item.price + amount , 0 )

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "INCREASE_COUNT":
             return { ...state, count: state.count + action.payload }
      case "REMOVE_FROM_BASKET":
        //   return {
        //       ...state,
        //       basket:state.basket.filter(item=>item.id !=action.id)
        //   }
        const index=state.basket.findIndex(
            (basketItem)=>basketItem.id ===action.id
        );
        let newBasket=[...state.basket];
        if(index>=0){
            newBasket.splice(index,1);

        }else{
            console.warn(` Can't remove product (id:${action.id}) as its not in basket! `)
        }
        return {
            ...state,basket:newBasket
        }
             
        default:
            return state;

    }
}
//splice use to remove or add
// The splice() method needs at least one parameter, which is the start index where the splice operation starts. In the code above,
//  the number 2 is passed to the method, which means splice() will start removing elements from index 2.

// You can also define how many elements you want to remove from the array by passing a second number argument known as removeCount.
//  For example, to remove only one element, you can pass the number 1 like this:
// // let months = ["January", "February", "Monday", "Tuesday"];
// let days = months.splice(2, 1);

// console.log(days); // ["Monday"]
// console.log(months); // ["January", "February", "Tuesday"]
