import { Rating } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../store/cartSlice'


function ProductComponent({item}) {
  const dispatch = useDispatch()

  function handleAddToCart(item) {
    dispatch(addProductAction(item))
  }
  return (
    <div className='p-4 shadov rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img src={item.image} alt='product' className='w-full h-48 object-contain mb-4'/>
      <h2 className='text-lg font-semibold'>{item.name}</h2>
      <h3 className='text-gray-500'>${item.price}</h3>
      <Rating name="read-only" value={item.rating} readOnly  />
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block' onClick={() => handleAddToCart(item)} >Add to Cart</span>
      </div>
    
    </div>
  )
}

export default ProductComponent