import { createSlice } from "@reduxjs/toolkit"; 



const initialState = {
    cart:[],
    quantity:0
}

const CartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddCard:(state,action)=>{state.cart.push(action.payload)}
    }
})

export const {addCard}= CartSlice.actions;
export default CartSlice.reducer;