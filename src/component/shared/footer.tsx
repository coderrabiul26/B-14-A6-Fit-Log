import React from 'react';
import navbarLogo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
         <div className='container mx-auto flex justify-center md:justify-between items-center bg-black py-10'>
            <div className='md:flex md: gap-3 hidden'>
                <Image src={navbarLogo} alt='navbar-logo'></Image>
                <h1 className='text-xl font-bold text-white'>FITLOG</h1>
            </div>
            <div>
                <p className='text-gray-500 italic'>&copy; 2026 FitLog-Workout Library. Train hard, log honest. </p>
            </div>
            
        </div>
    );
};

export default Footer;