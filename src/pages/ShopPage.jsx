import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../components/ProductComponent'
import { saveAllProductsAction } from '../store/productSlice';
import { mockData } from '../data.js';
function ShopPage() {
	const dispatch = useDispatch();
	const {products, isLoading} = useSelector((state) => state.productStore)
  
  

  return (
    <div className='container mx-auto py-12  '>
					<h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
						{isLoading ? (
							products.map((item, id) => (
								<div key={id}>
									<ProductComponent item={item} />
								</div>
							))
						) : (
							<h2>is Loading..</h2>
						)}
					</div>
				</div>
     
  )
}

export default ShopPage