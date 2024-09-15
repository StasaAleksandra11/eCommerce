import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

function CartPage() {
 
 const {products, cartTotal} = useSelector((state) => state.cartStore)
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
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={item.image} alt={item.name} className='w-10 h-10 md:w-20 md:h-20 border border-gray-600 rounded-lg '/>
              </TableCell>
              <TableCell align="left">${item.price}</TableCell>
              <TableCell align="left">
                <div className='flex items-center'>
                  <button className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>-</button>
                  <span className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>{item.count}</span>
                  <button className='px-[4px] py-[2px] text-[12px] md:px-[8px] md:py-[4px] bg-slate-300 md:text-[18px]'>+</button>
                </div >
              </TableCell>
              <TableCell align="right">${item.cartTotal}</TableCell>
              <TableCell align="right" >
                <button className='hover:text-red-600 hover:underline text-red-400 hidden md:block  '>Remove</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
   
  )
}

export default CartPage