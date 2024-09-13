import HeroComponent from '../components/HeroComponent';
import InfoSectionComponent from '../components/InfoSectionComponent';
import CategorySectionCompnent from '../components/CategorySectionCompnent';
import ProductComponent from '../components/ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productSlice';
import { mockData } from '../data.js';
import { useEffect } from 'react';
import ShopPage from './ShopPage.jsx';

function HomePage() {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(
		(state) => state.productStore
	);

	useEffect(() => {
		dispatch(saveAllProductsAction(mockData));
	}, []);
	return (
		<div className='mt-2 px-4 md:px-16 lg:px-24'>
			<div className='container mx-auto py-4 '>
				<HeroComponent />
				<InfoSectionComponent />
				<CategorySectionCompnent />
				<div className='container mx-auto py-12'>
					<h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
						{isLoading ? (
							products.slice(0, 5).map((item, id) => (
								<div key={id}>
									<ProductComponent item={item} />
								</div>
							))
						) : (
							<h2>is Loading..</h2>
						)}
					</div>
				</div>
				
			</div>
			
			<ShopPage/>
		
		</div>
	);
}

export default HomePage;
