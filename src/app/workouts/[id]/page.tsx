import { IWorkoutType } from '@/type/workoutType';
import Image from 'next/image';
import React from 'react';
import { Archive, Bookmark  } from "@deemlol/next-icons"

interface detailPageParams{
    params:Promise<{
        id:string
    }>
}

const detailPage = async({params}:detailPageParams) => {
    const{id}=await params

    const res= await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workout:IWorkoutType= await res.json()
    
    return (
        <div className='grid grid-cols-2 gap-10 container mx-auto bg-gray-800'>
            <div className='relative'>
                <Image src={workout.image} alt='workout-image' width={400} height={400} className='w-full h-full object-cover rounded-2xl'></Image>
            </div>
            <div className='space-y-5'>
                <h1 className='uppercase text-3xl font-bold text-white'>{workout.name}</h1>
                <p className='text-gray-300'>{workout.description}</p>
                <div className='flex gap-3'>
                    {workout.muscleGroups.map((muscle, ind)=>(
                        
                        <div key={ind} className="badge uppercase p-2 bg-[#c2f800] border-none ">{muscle}</div>
                        
                    ))}
                </div>
                <div className='grid grid-cols-2 bg-gray-700 text-gray-300 p-2 space-y-2'>
                    <h2>EQUIPMENT</h2>
                    <span className='justify-self-end'>{workout.equipment}</span>
                    <h2>DIFFICULTY</h2>
                    <span className='justify-self-end'>{workout.difficulty}</span>
                    <h2>SETS</h2>
                    <span className='justify-self-end'>{workout.sets}</span>
                    <h2>REPS</h2>
                    <span className='justify-self-end'>{workout.reps}</span>
                    <h2>DURATION</h2>
                    <span className='justify-self-end'>{workout.duration}</span>
                    <h2>CALORIES</h2>
                    <span className='justify-self-end'>{workout.caloriesBurned}</span>
                    <h2>RATING</h2>
                    <span className='justify-self-end'>{workout.rating}</span>
                </div>
               <div className='text-gray-300 space-y-2'>
                    <h1 className='text-xl font-bold text-white'>INSTRUCTIONS</h1>
                    {workout.instructions.map((item, ind)=>(
                    <div key={ind}>{ind+1}. {item}</div>
                        
                    ))}
                </div>
                <div className='flex gap-3'>
                    <button className='bg-[#c2f800] py-2 px-4 flex gap-2 rounded-xl cursor-pointer'> <Archive></Archive> Add to today's plan</button>
                    <button className='bg-gray-700 py-2 px-4 flex gap-2 rounded-xl text-white cursor-pointer'> <Bookmark></Bookmark> Save for later</button>
                </div>
            </div> 
        </div>
    );
};

export default detailPage;