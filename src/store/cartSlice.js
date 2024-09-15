import { createSlice } from "@reduxjs/toolkit"

 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalProduct: 0
    },
    reducers: {     
        addProductAction: (state, action) => {
          console.log(action.payload)
          let copyCart = [...state.products]
           let findeIndex  = null
             copyCart.find((item, index) => {
                  if( item.id === action.payload.id ){
                      findeIndex = index
                      return
                  }
             })

                   if(findeIndex === null){
                    copyCart.push({...action.payload, count : 1, cartTotal : action.payload.price})
                    state.totalProduct++
                   } else{ 
                    copyCart[findeIndex].count++
                   }


             



          state.products = copyCart
        } 
    }

 })

 export const {addProductAction} = cartSlice.actions
 export default cartSlice.reducer
 