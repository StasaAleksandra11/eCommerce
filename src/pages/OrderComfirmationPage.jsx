import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function OrderComfirmationPage({shippingInfo}) {
    const {totalPrice} = useSelector((state) => state.cartStore)
  return (
    <div className='container mx-auto py-6 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
        <p>Your order has been placed successfully. You will receive an email shortly</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
            <h3 className='text-lg font-semibold mb-2'>Order summary</h3>
            <p>Order number: 14523</p>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>Sipping Information</h2>
                <h3>{shippingInfo}</h3>
            
                <h2 className='text-md font-semibold mb-2'>Items Ordered</h2>
                <h3 className='text-md font-semibold mb-2'>Total Price: ${parseFloat(totalPrice.toFixed(2))} </h3>
              
            </div>
        </div>
        <div className='flex mt-6  space-x-4  '>
         <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Track Order</button>
         <NavLink to='/' className='bg-red-500 text-white py-2 px-4 hover:bg-red-800'>Continue Shopping</NavLink>
        
        </div>
    </div>
  )
}

export default OrderComfirmationPage