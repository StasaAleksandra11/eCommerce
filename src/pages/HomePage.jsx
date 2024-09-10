import React from 'react';

import HeroComponent from '../components/HeroComponent';
import InfoSectionComponent from '../components/InfoSectionComponent';
import CategorySectionCompnent from '../components/CategorySectionCompnent';
function HomePage() {
	return (
		<div className='mt-2 px-4 md:px-16 lg:px-24'>
			<div className='container mx-auto py-4 '>
			<HeroComponent/>
			<InfoSectionComponent/>
			<CategorySectionCompnent/>
			</div>
		</div>
	);
}

export default HomePage;
