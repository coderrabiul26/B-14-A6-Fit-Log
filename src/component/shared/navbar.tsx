'use client'

import Image from 'next/image';
import React from 'react';
import navbarLogo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname=usePathname()
    return (
        <div className='container mx-auto flex justify-between items-center py-5 bg-black'>
            <div className='flex gap-3'>
                <Image src={navbarLogo} alt='navbar-logo'></Image>
                <h1 className='text-xl font-bold text-white'>FITLOG</h1>
            </div>
            <div className='flex gap-3'>
                <Link href={'/'} className={`bg-gray-500 text-lg font-bold py-2 px-4 rounded-full ${pathname==='/'? 'text-[#ccff00]':''} `}>Workout</Link>
                <Link href={'/myPlan'} className={`bg-gray-500 text-lg font-bold py-2 px-4 rounded-full ${pathname==='/myPlan'? 'text-[#ccff00]':''} `}>My Plan</Link>
            </div>
            <div className='flex gap-1'>
                <button className="btn btn-outline text-white border-none text-lg">
                Plan <div className="badge badge-sm badge-secondary bg-[#ccff00] text-black border-none">+99</div>
                </button>
                <button className="btn text-white btn-outline border-none text-lg">
                Saved <div className="badge badge-sm badge-outline text-white">+99</div>
                </button>
                
            </div>
        </div>
    );
};

export default Navbar; 