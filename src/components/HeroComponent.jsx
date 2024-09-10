import React from 'react'
import { data } from '../data';
import hero from '../assets/hero.jpg';
function HeroComponent() {
  return (
    <div className='container mx-auto py-4 flex flex-col md:flex-row md:space-x-20'>
        <div className='w-full md:w-3/12 '>
					
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'> SHOP BY CATEGORIES </div>
                    <ul className='space-y-4 bg-gray-100 p-3 border w-full'>
                        {data.map((data, index) => (
                            <li key={index} className=' flex items-center '>
              <div className='w-2 h-2 border border-red-500 rounded-full mr-2 '></div>
                {data}
            </li>
                        ))}
                    </ul>
        
                </div>
            
            <div className='w-full md:w-9/12 mt-5 md:mt-0 relative'>
                <img
                    src={hero}
                    alt='hero image'
                    className=' '
                />
      <div className='absolute top-3 left-10 '>
      <button className='bg-red-600 px-8 py-1.5 text-white  mt-6 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 '>SHOP NOW</button>
      </div>
            </div>
    </div>
  )
}

export default HeroComponent