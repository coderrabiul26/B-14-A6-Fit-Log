import { IWorkoutType } from '@/type/workoutType';
import Image from 'next/image';
import React from 'react';
import { Clock, Apple, Star } from "@deemlol/next-icons"
import Link from 'next/link';

interface IWorkoutProps{
    workout: IWorkoutType
}

const WorkoutCard = ({workout}:IWorkoutProps) => {
  
    return (
        <Link href={`/workouts/${workout.id}`}>
        <div className='rounded-2xl'>
            <Image src={workout.image} alt={workout.name} width={400} height={400} className='rounded-t-3xl w-full h-75 object-cover'></Image>
            <div className='space-y-4 my-5 ml-5'>
                <div className='flex gap-3'>
                    {workout.muscleGroups.map((muscle, ind)=>(
                        
                        <div key={ind} className="badge font-bold bg-[#c2f800] outline-none border-none">{muscle}</div>
                        
                    ))}
                </div>
                
                <h2 className='text-white text-lg uppercase'>{workout.name}</h2>
                <p className='text-gray-400'>{workout.equipment}</p>
                <div className='text-gray-400 flex gap-4 mt-3'>
                    <div className='flex gap-2 items-center'><Clock></Clock>{workout.duration} min</div>
                    <div className='flex gap-2 items-center'><Apple></Apple>{workout.caloriesBurned} kcal</div>
                    <div className='flex gap-2 items-center'><Star></Star>{workout.rating}</div>
                </div>
            </div>
            
            
        </div>
    </Link>
    );
};

export default WorkoutCard;