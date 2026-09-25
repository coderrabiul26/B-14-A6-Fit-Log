import { IWorkoutType } from '@/type/workoutType';
import Image from 'next/image';
import React from 'react';
import { Clock, Apple, Star, Check, X } from "@deemlol/next-icons"
import RemoveCard from './removeCard';
import Link from 'next/link';

interface workoutProps{
    workout:IWorkoutType
}
const AddSaveCard = ({workout}:workoutProps) => {
    return (
        <div className='grid grid-cols-2 gap-20 justify-between items-center bg-gray-800 p-3 rounded-2xl'>

            <div className='flex items-center gap-4'>
                <Image src={workout.image} alt='workout-image' width={200} height={200} className='w-100 h-40 object-cover rounded-4xl'></Image>
                <div>
                    <h1 className='text-white text-xl font-bold'>{workout.name}</h1>
                    <p className='text-gray-400'>{workout.equipment}</p>
                    <div className='text-gray-400 flex gap-4 mt-3'>
                        <div className='flex gap-2'><Clock></Clock>{workout.duration}</div>
                        <div className='flex gap-2'><Apple></Apple>{workout.caloriesBurned}</div>
                        <div className='flex gap-2'><Star></Star>{workout.rating}</div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end gap-3 items-center'>
                <Link href={`/workouts/${workout.id}`}>
                <button className='bg-gray-700 py-2 px-4 rounded-xl text-white cursor-pointer'> View Details</button>
                </Link>
                <RemoveCard workout={workout}></RemoveCard>
            </div>
            
        </div>
    );
};

export default AddSaveCard;