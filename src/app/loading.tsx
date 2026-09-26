import React from 'react';

const Loading = () => {
    return (
         <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-[#c2f800]"></span>
            <span className="text-white ml-3">Loading workouts…</span>
        </div>
)};

export default Loading;