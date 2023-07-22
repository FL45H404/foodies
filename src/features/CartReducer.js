import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
        total:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const data=state.cart.find((item)=>item.id===action.payload.id)
            if (data){
                data.quantity=data.quantity+1
                state.total+=data.price || data.defaultprice
            }else{
                state.cart.push(action.payload)
                state.total+=action.payload.price || data.defaultprice *action.payload.quantity
                
            }
        },
        removeFromCart:(state,action)=>{
            const data=state.cart.find((item)=>item.id===action.payload)
            if(data.quantity===1){
                data.quantity=1
                state.total=state.total
            }else{
                data.quantity--
                state.total-=data.price || data.defaultprice
            }

        },
        deleteFromCart:(state,action)=>{
            const data=state.cart.find((item)=>item.id===action.payload)
            console.log(data)
            let total=data.price*data.quantity || data.defaultprice*data.quantity
            
            state.total-=total
            state.cart=state.cart.filter((item)=>item.id!==action.payload)
        }
    }

})
export const {addToCart,removeFromCart,deleteFromCart}=CartSlice.actions
export default CartSlice.reducer