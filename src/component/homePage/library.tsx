import React from 'react';
import WorkoutCard from '../shared/workoutCard';
import { IWorkoutType } from '@/type/workoutType';


const fitlogDataPromise=async()=>{
    const res= await fetch('https://api.abcz.workers.dev/api/fitlog')
    const promiseData= await res.json()
    return promiseData
}

const Library = async() => {
    const data= await fitlogDataPromise()

    return (
        <section id='library' className='container mx-auto bg-gray-800 p-2 md:p-0'>
            <h1 className='text-2xl md:text-3xl font-bold text-white pt-3'>THE LIBRARY</h1>
            <p className='text-gray-400 mb-3'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-0'>
                {
                    data.map((workout:IWorkoutType)=><WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
                }


            </div>
            
        </section>
    );
};

export default Library;