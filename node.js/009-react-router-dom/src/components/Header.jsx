import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed bg-[whitesmoke] w-full h-16 flex gap-5 items-center p-4'>
            <Link to={'/home'}>
                Home
            </Link>
            <Link to={'/about-us'}>
                About Us
            </Link>
            <Link to={'/contact-us'}>
                Contact Us
            </Link>
            <Link to={'/'}>
                Login
            </Link>
        </div>
    )
}

export default Header
