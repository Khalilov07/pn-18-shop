import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "cart",
    initialState : {
        quantityCart : 0, //диван и кровать - 2
        products : [], // 3 дивана и 2 кровати
        total : 0
    },
    reducers : {
        addToCart : (state, action) => {
            state.quantityCart++
            state.products.push(action.payload) 
            state.total += action.payload.price * action.payload.quantity    
        }
    }
})

export const { addToCart } = productSlice.actions
export default productSlice.reducer