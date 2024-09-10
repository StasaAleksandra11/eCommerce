import React from 'react'
import kids from '../assets/kids.jpg'
import man from '../assets/man.jpg'
import woman from '../assets/woman.jpg'
function CategorySectionCompnent() {

  const category = [
    {
        title: 'man',
        imgUrl: man
    },
    {
        title: 'woman',
        imgUrl: woman
    },
    {
        title: 'kids',
        imgUrl: kids
    }
  ]

  return (
    <div className='container mx-auto mt-9 grid grid-cols-1 sm:grid-cols-3 gap-6'>
      
            {category.map((data, index) => (
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 '>
                    <img src={data.imgUrl} className='w-full h-full object-cover rounded-lg shadow-md ' />
                    <div className='absolute top-12 left-2'>
                        <p className='text-xl font-bold'>{data.title}</p>
                        <p className='text-gray-600'>Wiew All</p>
                    </div>
                </div>
            ))}
       
    </div>
  )
}

export default CategorySectionCompnent