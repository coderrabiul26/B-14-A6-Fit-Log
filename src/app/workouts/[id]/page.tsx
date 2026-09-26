import ButtonAction from '@/component/buttonAction/buttonAction';
import { IWorkoutType } from '@/type/workoutType';
import Image from 'next/image';
import React from 'react';

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
            <div className='space-y-6'>
                <h1 className='uppercase text-3xl font-bold text-white'>{workout.name}</h1>
                <p className='text-gray-400 italic'>{workout.description}</p>
                <div className='flex gap-3'>
                    {workout.muscleGroups.map((muscle, ind)=>(
                        
                        <div key={ind} className="badge p-2 bg-[#c2f800] border-none ">{muscle}</div>
                        
                    ))}
                </div>
                <div className='grid grid-cols-2 bg-gray-700 text-gray-400 p-2 space-y-3'>
                    <h2>EQUIPMENT</h2>
                    <span className='justify-self-end'>{workout.equipment}</span>
                    <h2>DIFFICULTY</h2>
                    <span className='justify-self-end'>{workout.difficulty}</span>
                    <h2>SETS</h2>
                    <span className='justify-self-end'>{workout.sets}</span>
                    <h2>REPS</h2>
                    <span className='justify-self-end'>{workout.reps}</span>
                    <h2>DURATION</h2>
                    <span className='justify-self-end'>{workout.duration} min</span>
                    <h2>CALORIES</h2>
                    <span className='justify-self-end'>{workout.caloriesBurned} kcal</span>
                    <h2>RATING</h2>
                    <span className='justify-self-end'>{workout.rating}</span>
                </div>
               <div className='text-gray-400 space-y-3'>
                   
                    <ol className='list-decimal pl-5 space-y-4'>
                         {workout.instructions.map((item, ind)=>(<li key={ind}>{item}</li>
                        
                        ))}
                    </ol>
                </div>
                <div>
                    <ButtonAction workout={workout}></ButtonAction>
                </div>
            </div> 
        </div>
    );
};

export default detailPage;