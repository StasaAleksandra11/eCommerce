import React from 'react';
import { LuSearch } from 'react-icons/lu';
import { SlBasket } from 'react-icons/sl';
import { FaRegUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavbarComponent() {
	const {totalProduct} = useSelector((state) => state.cartStore)
	return (
		<nav className='shadow-md'>
			<div className=' container mx-auto px-4 md:px-16 lg:px-24 py-4 justify-between flex items-center'>
				<div className=' '>
					<Link to='/' className='text-[25px] font-semibold'>
						{' '}
						e-Shop{' '}
					</Link>
				</div>
				<div className='relative flex-1 mx-4'>
                    <form>
					  <input
						type='text'
						placeholder='Search Product'
						className='border border-black rounded-full w-full px-4 py-2'
					  />
					  <button className=' absolute top-3 right-3   '>
						<LuSearch  color='red'/>
					  </button>

                    </form>
				</div>
				<div className='flex items-center space-x-4'>
					<div className='flex items-center space-x-1'>

					 <Link to='/cart'>
						{' '}
						<SlBasket size={20} />
					 </Link>
					 <span className='bg-red-500 rounded-full text-white w-[20px] h-[20px] flex items-center justify-center'>{totalProduct}</span>
					</div>
					<button className=' hidden md:block'>Login | Register</button>
					<button className='block md:hidden'>
						<FaRegUser size={18} />
					</button>
				</div>
			</div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <NavLink to='/' className='hover:underline'>Home</NavLink>
                <NavLink to='/shop'className='hover:underline'>Shop</NavLink>
                <NavLink to='/contact' className='hover:underline'>Contact</NavLink>
                <NavLink to='/about' className='hover:underline'>About</NavLink>
            </div>
		</nav>
	);
}

export default NavbarComponent;
