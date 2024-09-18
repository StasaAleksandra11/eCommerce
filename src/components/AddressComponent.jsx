import React, { useState } from 'react'

function AddressComponent({setIsModelOpen, setAddress}) {
  const [newAddress, setNewAddress] = useState('')
  return (
    <div>
      <input type='text' placeholder='Enter new address' className='border p-2 w-full mb-4'
      onChange={(e) => setNewAddress(e.target.value)}/>
      <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={() => setIsModelOpen(false)}>Cancel</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => {setIsModelOpen(false); setAddress(newAddress)}}>Save Address</button>
      </div>
    </div>
  )
}

export default AddressComponent