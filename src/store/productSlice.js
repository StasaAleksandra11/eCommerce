import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"


 const productSlice = createSlice ({

     name: 'product',
     initialState: {
        products: [],
        isLoading: false
     },
     reducers: {
        saveAllProductsAction : (state, action) => {
                console.log(action.payload)
                state.products = action.payload
                state.isLoading = true
                
        }
     }
 })

 export const {saveAllProductsAction, isLoadingAction} = productSlice.actions
 export default productSlice.reducer