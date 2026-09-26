import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='container mx-auto min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center'>
            <span className='text-6xl font-bold text-[#c2f800]'>404</span>
            <h1 className='text-2xl font-bold text-white mt-3'>
                Page Not Found
            </h1>
        </div>
    );
};

export default NotFoundPage;