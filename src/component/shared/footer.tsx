import React from 'react';
import navbarLogo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
         <div className='container mx-auto flex justify-between items-center bg-black py-10'>
            <div className='flex gap-3'>
                <Image src={navbarLogo} alt='navbar-logo'></Image>
                <h1 className='text-xl font-bold text-white'>FITLOG</h1>
            </div>
            <div>
                <p className='text-gray-400'>@2026 FitLog-Workout Library. Train hard, log honest. </p>
            </div>
            
        </div>
    );
};

export default Footer;