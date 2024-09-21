import React, { useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, setPriceHandlerAction } from '../store/cartSlice';

import ModalComponent from '../components/ModalComponent';
import AddressComponent from '../components/AddressComponent';
import { useNavigate } from 'react-router-dom';

function CartPage() {

 const dispatch = useDispatch()
 const {products, cartTotal, totalPrice, totalProduct} = useSelector((state) => state.cartStore)
 const [address, setAddress] = useState('Z. Trifunovica 17')
 const [isModelOpen, setIsModelOpen] = useState(false)  
 const navigate = useNavigate()
 function handleRemove(item) {
  dispatch(deleteProductAction(item))
 }


  return (
  <div className='mt-[50px]'>
    <div className='container mx-auto py-4 items-center flex flex-col md:flex-row gap-[20px]'>
    <TableContainer component={Paper} sx={{ width: '90%' }} >
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold', fontSize: '18px' }}>
            <TableCell>Products</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right" ><span className='hidden md:block'>Remove</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={item.image} alt={item.name} className='w-10 h-10 md:w-20 md:h-20 border border-gray-600 rounded-lg '/>
              </TableCell>
              <TableCell align="left">${parseFloat(item.price.toFixed(2))}</TableCell>
              <TableCell align="left">
                <div className='flex items-center'>
                  <button onClick={() => dispatch(setPriceHandlerAction({index, increment: -1}))} className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>-</button>
                  <span className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>{item.count}</span>
                  <button onClick={() => dispatch(setPriceHandlerAction({index, increment: 1}))} className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>+</button>
                </div >
              </TableCell>
              <TableCell align="right">${parseFloat(item.cartTotal.toFixed(2))}</TableCell>
              <TableCell align="right" sx={{ display: { xs: 'none', md: 'table-cell'} }} >
                <button onClick={() => handleRemove(item)} className='hover:text-red-600 hover:underline text-red-400'>Remove</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   
   <div className='md:w-[30%] p-6 rounded-lg shadow-md border h-full'>
    <span className='text-sm font-semibold mb-5'>CART TOTAL: </span>
     <div className='flex justify-between mb-5 border-b pb-1'>
       <span className='text-sm'>Total Items:</span>
       <span>{totalProduct}</span>
     </div>
 
     
     <p>Shipping to:</p>
     <p className='ml-2'>shipping to: {address}</p>
     <span className='text-xs font-bold'>{}</span>
     <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={() => setIsModelOpen(true)}>Change Address</button>
     <div>
       <span className='text-sm'>Total Price:</span>
       <span>${parseFloat(totalPrice.toFixed(2))}</span> 
     </div>

     <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={() => navigate('/checkout')}>Proced to checkout</button>
   </div>
   </div>
     <ModalComponent isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}><AddressComponent setAddress={setAddress} setIsModelOpen={setIsModelOpen}/></ModalComponent>
     
  </div>
   
  )
}

export default CartPage