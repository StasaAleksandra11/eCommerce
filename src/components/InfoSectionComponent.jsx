import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";





function InfoSectionComponent() {

    
        const infoItems = [
        {
            img: < LiaShippingFastSolid size={34} color='red'/>,
            title: 'Free Shipping',
            descr: 'Get your orders delivered with no extra cost'
        },
        {
            img: <BiSupport size={34} color='red'/>,
            title: 'Support 24/7',
            descr: 'We are to assist you anytime'
        },
        {
            img: <FaMoneyBillWave size={34} color='red'/>,
            title: '100% Money Back',
            descr: 'Full refund if you are not satisfied'
        },
        {
            img: <FaLock size={34} color='red'/>,
            title: 'Payment Secure',
            descr: 'Your payment information is safe with us'
        },
        {
            img: <MdDiscount size={34} color='red'/>,
            title: 'Discount',
            descr: 'Enjoy the best prices on our products'
        }
    
    ]

   
  return ( 
   <div className='pt-12'>
    <div className='container flex-1 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
    {infoItems.map((sec, index) => (
        <div key={index} className='flex-1 mr-3 flex-col items-center mt-3 p-4  border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
             {sec.img}
            <h2 className=' mt-4 text-xl font-semibold'>{sec.title}</h2>
            <p className='mt-2 text-gray-600'>{sec.descr}</p>
        </div>
    ))}

    </div>   
  </div>
  )
  
}

export default InfoSectionComponent