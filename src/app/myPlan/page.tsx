'use client'
import AddPlanCard from '@/component/myPlanCard/addPlanCard';
import AddSaveCard from '@/component/myPlanCard/addSaveCard';
import { workoutContext } from '@/context/workoutContext';
import { IWorkoutType } from '@/type/workoutType';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    const { addPlan, addSave } = useContext(workoutContext);

    const[activeTab, setActiveTab]=useState<'plan'| 'save'>('plan')
    const currentWorkouts=activeTab==='plan'?addPlan:addSave;

    const totalMinutes=currentWorkouts.reduce((total, workout)=>total+Number(workout.duration),0)

    const totalCalories=currentWorkouts.reduce((total, workout)=>total+Number(workout.caloriesBurned),0)

    const[sortBy, setSortBy]=useState<'duration'|'calories'|'rating'>('duration')
    
    const sortedWorkouts=(workouts:IWorkoutType[])=>{
        
        const sortedWorkouts=[...workouts]
        if(sortBy==='duration'){
            sortedWorkouts.sort((a,b)=>b.duration-a.duration)
        }else if(sortBy==='calories'){
            sortedWorkouts.sort((a,b)=>b.caloriesBurned- a.caloriesBurned)
        }else if(sortBy==='rating'){
            sortedWorkouts.sort((a,b)=>b.rating- a.rating)
        }
        return sortedWorkouts
    }

    const sortedAddPlan= sortedWorkouts(addPlan)
    const sortedAddSave= sortedWorkouts(addSave)

    console.log(sortedAddPlan, sortedAddSave);


    return (
        <div className='p-2 md:p-0'>
            <div className='bg-gray-900 container mx-auto mb-5 '>
                <h1 className='text-white font-bold text-xl md:3xl'>MY PLAN</h1>
                <p className='text-gray-400 italic'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='bg-gray-700 p-5 flex justify-between container mx-auto rounded-2xl mb-5'>
                <div>
                    <h1 className='text-gray-400'>Exercises</h1>
                    <span className='text-3xl font-bold text-[#c2f800]'>{currentWorkouts.length}</span>
                </div>
                <div>
                    <h1 className='text-gray-400'>Minutes</h1>
                    <span className='text-3xl text-white font-bold'>{totalMinutes}</span>
                </div>
                <div>
                    <h1 className='text-gray-400'>Calories</h1>
                    <span className='text-3xl text-white font-bold'>{totalCalories}</span>
                </div>
            </div>

            <div className='text-center my-5'>
                <select 
                value={sortBy} 
                onChange={(e)=>setSortBy(e.target.value as 'duration'|'calories'|'rating' )}
                className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value={'duration'}>Duration</option>
                    <option value={'calories'}>Calories</option>
                    <option value={'rating'}>Rating</option>
                </select>
            </div>

        <div className="container mx-auto">
            <div role="tablist" className="tabs tabs-lift">
             
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab text-white checked:bg-[#c2f800] checked:text-black"
                    aria-label="Today's Plan"
                    checked={activeTab==='plan'}
                    onChange={()=>setActiveTab('plan')}
                  
                    />
                <div role="tabpanel" className="tab-content bg-gray-900 border-base-300 rounded-box">
                    {sortedAddPlan.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {sortedAddPlan.map((workout: IWorkoutType) => (
                                <AddPlanCard key={workout.id} workout={workout} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-15">
                            <h1 className="text-white text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-gray-400 italic">Browse the library and add a lift to get today moving.</p>
                            
                            <Link href={'/'}>
                            <button className="bg-[#c2f800] py-2 px-4 font-bold rounded-full text-black">Go to workouts</button>
                            </Link>
                        </div>
                    )}
                </div>

      
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab text-white checked:bg-[#c2f800] checked:text-black"
                    aria-label="Saved"
                    checked={activeTab==='save'}
                    onChange={()=>setActiveTab('save')}
                    />
                <div role="tabpanel" className="tab-content bg-gray-900 border-base-300 rounded-box">
                    {sortedAddSave.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {sortedAddSave.map((workout: IWorkoutType) => (
                                <AddSaveCard key={workout.id} workout={workout} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-15">
                            <h1 className="text-white text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-gray-400 italic">Browse the library and add a lift to get today moving.</p>

                            <Link href={'/'}>
                            <button className="bg-[#c2f800] py-2 px-4 font-bold rounded-full text-black">Go to workouts</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyPlanPage;