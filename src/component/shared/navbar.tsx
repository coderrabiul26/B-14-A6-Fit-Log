'use client'

import Image from 'next/image';
import React, { useContext } from 'react';
import navbarLogo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { workoutContext } from '@/context/workoutContext';

const Navbar = () => {
    const{addPlan, addSave}=useContext(workoutContext)
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
            
            <Link href={'/myPlan'}>
            <div className='flex gap-1'>
                <button className="btn btn-outline text-white border-none text-lg">
                Plan <div className="badge badge-sm badge-secondary bg-[#ccff00] text-black border-none">{addPlan.length}</div>
                </button>
                <button className="btn text-white btn-outline border-none text-lg">
                Saved <div className="badge badge-sm badge-outline text-white">{addSave.length}</div>
                </button>
                
            </div>
            </Link>
        </div>
    );
};

export default Navbar; 