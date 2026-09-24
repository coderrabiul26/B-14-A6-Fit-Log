import { IWorkoutType } from '@/type/workoutType';
import Image from 'next/image';
import React from 'react';
import { Clock, Apple, Star } from "@deemlol/next-icons"

interface IWorkoutProps{
    workout: IWorkoutType
}

const WorkoutCard = ({workout}:IWorkoutProps) => {
  
    return (
        <div className='rounded-2xl'>
            <Image src={workout.image} alt='workout-image' width={400} height={400} className='rounded-t-3xl w-full h-75 object-cover'></Image>
            <div className='space-y-4 my-5 ml-5'>
                <div className='flex gap-3'>
                    {workout.muscleGroups.map((muscle, ind)=>(
                  
                        <div key={ind} className="badge uppercase font-bold bg-[#c2f800] ">{muscle}</div>
                  
                ))}
                </div>
                
                <h1 className='text-white text-lg tont-bold uppercase'>{workout.name}</h1>
                <p className='text-gray-400'>{workout.equipment}</p>
                <div className='text-gray-400 flex gap-4 mt-3'>
                    <div className='flex gap-2'><Clock></Clock>{workout.duration}</div>
                    <div className='flex gap-2'><Apple></Apple>{workout.caloriesBurned}</div>
                    <div className='flex gap-2'><Star></Star>{workout.rating}</div>
                </div>
            </div>
            
            
        </div>
    );
};

export default WorkoutCard;