import Image from 'next/image';
import React from 'react';
import bannerLogo from '@/assets/banner.png'
import { oswald } from '@/type/font';
import { ArrowDown } from '@deemlol/next-icons';

const Banner = () => {
    return (
        <div className='container mx-auto bg-gray-800 p-10 grid grid-cols-2 my-10 rounded-2xl'>
            <div className='space-y-10'>
                <p className='text-[#c2f800] '>WORKOUT LIBRARY</p>
                <h1 className={`text-5xl text-white font-bold ${oswald.className}`}>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
                <p className='text-white italic'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <a
                href="#library"
                className="btn bg-[#c2f800] border-none">BROWSE WORKOUTS <ArrowDown></ArrowDown></a>
            </div>
            <div className='justify-self-center'>
                <Image src={bannerLogo} alt='banner-logo' width={400} height={400}></Image>
            </div>
            
        </div>
    );
};

export default Banner;