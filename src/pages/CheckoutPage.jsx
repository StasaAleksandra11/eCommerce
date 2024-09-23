import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import {  useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import OrderComfirmationPage from './OrderComfirmationPage';



function CheckoutPage() {
	
	
	const [billingToggle, setBillingToggle] = useState(true);
    const [shippingInformation, setShippingInformation] = useState(true)
    const [paymentToggle, setPaymentToggle] = useState(true)
    const [paymentMethod, setPaymentMethod] = useState('cod')
	const {products, cartTotal, totalPrice, count } = useSelector((state) => state.cartStore) 
	const [shippingInfo, setShippingInfo] = useState([{address: '', city: '', zip: ''}])


	
	
	


	
	return (
		<div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>
			<h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
			<div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
				<div className='md:w-2/3'>
                {/* Billing Information */}
					<div className='border p-2 mb-6'>
					     <div
							className='flex items-center justify-between'
							onClick={() => setBillingToggle(!billingToggle)}>
							<h3 className='text-lg font-semibold mb-2'>
								Billing Information
							</h3>
							{billingToggle ? <FaAngleDown /> : <FaAngleUp />}
						   </div>
					       <div className={` space-y-4 ${billingToggle ? '' : 'hidden'} `}>
							   <div>
								<label className='block text-gray-700'>Name</label>
								<input
									type='text'
									name='name'
									placeholder='Enter Name'
									className='w-full px-3 border'/>
							    </div>
						  
					  	       
							    <div>
								<label className='block text-gray-700'>Email</label>
								<input
									type='email'
									name='email'
									placeholder='Enter Email'
									className='w-full px-3 border'/>
                                </div>
							   
						        <div>
							   
								<label className='block text-gray-700'>Phone</label>
								<input
									type='text'
									name='phone'
									placeholder='Enter Phone'
									className='w-full px-3 border'/>
							    </div>
						  </div>

                        
				</div>

                      {/* Shipping Information */}
                <div className='border p-2 mb-6'>
					     <div
							className='flex items-center justify-between'
							onClick={() => setShippingInformation(!shippingInformation)}>
							<h3 className='text-lg font-semibold mb-2'>
								Shipping Information
							</h3>
							{billingToggle ? <FaAngleDown /> : <FaAngleUp />}
						   </div>
					       <div className={` space-y-4 ${shippingInformation ? '' : 'hidden'} `}>
							   <div>
								<label className='block text-gray-700'>Address</label>
								<input
									type='text'
									name='address'
									placeholder='Enter Address'
									className='w-full px-3 border'
									onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
									/>
									
							    </div>
						  
					  	       
							    <div>
								<label className='block text-gray-700'>City</label>
								<input
									type='text'
									name='city'
									placeholder='Enter City'
									className='w-full px-3 border'
									onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}/>
									
                                </div>
							   
						        <div>
							   
								<label className='block text-gray-700'>Zip Code</label>
								<input
									type='text'
									name='zip code'
									placeholder='Enter Zip Code'
									className='w-full px-3 border'
									onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}/>
								
							    </div>
						  </div>

                        
				</div>

                      {/*payment method */}
                <div className='border p-2 mb-6'>
					     <div
							className='flex items-center justify-between'
							onClick={() => setPaymentToggle(!paymentToggle)}>
							<h3 className='text-lg font-semibold mb-2'>
								Payment Method 
							</h3>
							{paymentToggle  ? <FaAngleDown /> : <FaAngleUp />}
						   </div>
					       <div className={` space-y-4 ${paymentToggle ? '' : 'hidden'} `}>
							   <div className='flex items-center mb-2'>
								<input
									type='radio'
									name='name'
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
									/>
								<label className='block text-gray-700 ml-2'>Cash on delivery</label>
							   </div>
                               <div className='flex items-center mb-2'>
								<input
									type='radio'
									name='name'
                                    checked={paymentMethod === 'dc'}
                                    onChange={() => setPaymentMethod('dc')}
									/>
								<label className='block text-gray-700 ml-2'>Debit Card</label>
							    </div>
                          {paymentMethod === 'dc' && (
                            <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                    <input type='text' placeholder='Enter Card Number'
                                    className='p-2 border w-full rounded'/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                    <input type='text' placeholder='Enter Card Holder Name'
                                     className='p-2 border w-full rounded'/>
                                </div>
                                <div>
                                    <div>
                                        <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                                        <input type='text' placeholder='Enter Expire Date'
                                         className='p-2 border w-full rounded'/>
                                    </div>
                                    <div>
                                        <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                        <input type='text' placeholder='CVV'
                                         className='p-2 border w-full rounded'/>
                                    </div>
                                </div>
                            </div>
                          )}
						  </div>

                        
				</div>
				</div>
				<div className='md:w-1/3 p-6 rounded-lg shadow-md border'>
			     <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
				 <div className='space-y-4'>
					{products.map((item)=>
						<div key={item.id} className='flex justify-between'> 
						
						<div className='flex items-center'>
							<img src={item.image} 
							alt={item.name}
							className='w-16 h-16 object-contain rounded'/>
							<div className='ml-4'>
						    	<h4 className='text-md font-semibold'>{item.name}</h4>
						     	<p className='text-gray-600'>${parseFloat(item.cartTotal.toFixed(2))} x {item.count}</p>
							</div>

						</div>

						
						</div>)}
				 </div>
				 <div className='mt-4 border-t pt-4'>
					<div className='flex justify-between'>
				      <span>Total Price:</span>
				     
					<span className='font-semibold'> ${parseFloat(totalPrice.toFixed(2))}</span>
					
					</div>
				 </div>
				 <NavLink to='/order' className='block w-full text-center bg-red-600 text-white py-2 mt-6 hover:bg-red-800' shippingInfo={shippingInfo}>Place Order</NavLink>
				
				</div>
			</div>
			
			
		</div>
	);
}

export default CheckoutPage;
