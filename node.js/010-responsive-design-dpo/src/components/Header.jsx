import React, { useState } from 'react'
import { FiHeart, FiSearch, FiShoppingBag } from 'react-icons/fi'
import { IoIosMenu } from 'react-icons/io'
import SideNav from './SideNav'

const Header = () => {
    const [isSideNav, setIsSideNav] = useState(false);
    return (
        <div className='font-[Inter_Variable] capitalize py-4 lg:px-20 md:px-10 sm:px-5 px-2'>
            <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] ${isSideNav ? '' : 'hidden'}`}>
                <span
                    onClick={() => setIsSideNav(false)}
                    className='absolute top-0 right-0 text-[40px] text-white px-2'>
                    &times;
                </span>
                <SideNav left={isSideNav ? 0 : -100} />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-5'>
                    <figure className='w-[160px]'>
                        <img src='https://www.dsigndpo.com/images/main-logo.svg' className='w-full' alt='logo' />
                    </figure>
                    <nav className='hidden lg:block'>
                        <ul className='flex justify-between items-center gap-5 text-[15px] font-[500]'>
                            <li className='hover:text-[#ec6b6c] duration-400 cursor-pointer'>home</li>
                            <li className='hover:text-[#ec6b6c] duration-400 cursor-pointer'>about us</li>
                            <li className='hover:text-[#ec6b6c] duration-400 cursor-pointer'>explore</li>
                            <li className='hover:text-[#ec6b6c] duration-400 cursor-pointer'>blog</li>
                            <li className='hover:text-[#ec6b6c] duration-400 cursor-pointer'>contact us</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-between items-center gap-5'>
                    <div>
                        <ul className='text-[24px] text-[rgb(33,37,41)] font-[400] flex justify-between items-center gap-4'>
                            <li><FiSearch /></li>
                            <li><FiHeart /></li>
                            <li><FiShoppingBag /></li>
                            <li onClick={() => setIsSideNav(true)}
                                className='lg:hidden'><IoIosMenu /></li>
                        </ul>
                    </div>
                    <div className='lg:flex gap-5 hidden'>
                        <button className='flex items-center capitalize text-[#fca120] font-[600] duration-400 cursor-pointer hover:text-[#ec6b6c]'>
                            <img src='https://www.dsigndpo.com/images/header-crown.svg' alt='crown' />
                            <span className='ms-2'>upgrade pro</span>
                        </button>
                        <button className='capitalize rounded-sm text-white hover:text-[#ec6b6c] py-2 px-5 font-[700] cursor-pointer  bg-[#ec6b6c] hover:bg-white duration-400 border border-[#ec6b6c]'>sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
