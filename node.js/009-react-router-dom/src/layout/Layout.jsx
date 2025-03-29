import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import SideNave from '../components/SideNave';

const Layout = () => {
    return (
        <div className='grid grid-cols-[2fr_8fr]'>
            <div className='relative'>
                <SideNave />
            </div>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
