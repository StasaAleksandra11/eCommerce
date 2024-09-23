import { createSlice } from "@reduxjs/toolkit"
 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalProduct: 0,
        totalPrice : 0
       
        
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
                   
                    state.totalPrice +=  parseFloat(action.payload.price.toFixed(2) )                     
                   } else{ 
                    copyCart[findeIndex].count++
                   }


             



          state.products = copyCart
        },
         
         deleteProductAction : (state, action) => {
          console.log(action.payload)
          let copyCart = [...state.products]
          let findeIndex = null
          copyCart.find((item, index) => {
              if( item.id === action.payload.id ){
                  findeIndex = index
                  return
              }
          }) 

          if(findeIndex !== null){
            copyCart.splice(findeIndex, 1)
            state.totalProduct--
          }

          state.products = copyCart

         },
         setPriceHandlerAction : (state, action) =>{
          console.log(action.payload)
          let copyCart = [...state.products]
            
            const {increment, index} = action.payload 
            copyCart[index].cartTotal += copyCart[index].price * increment
            state.totalPrice =  subtotal(copyCart)
            parseFloat(subtotal(copyCart).toFixed(2) ) 
 
            if(copyCart[index].count === 1 && increment === -1){

                 copyCart.splice(index, 1)
                 state.totalProduct-- 
            } else {

              copyCart[index].count += increment
            }

          state.products = copyCart
         
    }
   
}})



 function subtotal(arr){
   return arr.reduce((acc, current)=>{
    return acc + current.cartTotal;
   }, 0)
 }

 export const {addProductAction, deleteProductAction, setPriceHandlerAction, newOrderAction} = cartSlice.actions
 export default cartSlice.reducer
 