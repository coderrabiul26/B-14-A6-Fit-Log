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


    return (
        <div>
            <div className='bg-gray-900 container mx-auto mb-5'>
                <h1 className='text-white font-bold text-3xl'>MY PLAN</h1>
                <p className='text-gray-400'>Cap of five lifts for taday. Finish them, then load more</p>
            </div>
            <div className='bg-gray-700 p-5 flex justify-between container mx-auto rounded-2xl mb-5'>
                <div>
                    <h1 className='text-gray-400'>Exercise</h1>
                    <span className='text-3xl text-[#c2f800]'>{currentWorkouts.length}</span>
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

        <div className="container mx-auto">
            <div role="tablist" className="tabs tabs-lift">
                {/* Tab 1 */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab"
                    aria-label="Today's Plan"
                    checked={activeTab==='plan'}
                    onChange={()=>setActiveTab('plan')}
                  
                    />
                <div role="tabpanel" className="tab-content bg-gray-900 border-base-300 rounded-box">
                    {addPlan.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {addPlan.map((workout: IWorkoutType) => (
                                <AddPlanCard key={workout.id} workout={workout} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-15">
                            <h1 className="text-white text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
                            
                            <Link href={'/'}>
                            <button className="bg-[#c2f800] py-2 px-4 font-bold rounded-full text-black">Go to workouts</button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Tab 2 */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab"
                    aria-label="Saved"
                    checked={activeTab==='save'}
                    onChange={()=>setActiveTab('save')}
                    />
                <div role="tabpanel" className="tab-content bg-gray-900 border-base-300 rounded-box">
                    {addSave.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {addSave.map((workout: IWorkoutType) => (
                                <AddSaveCard key={workout.id} workout={workout} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-15">
                            <h1 className="text-white text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
                            <button className="bg-[#c2f800] py-2 px-4 font-bold rounded-full text-black">Go to workouts</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyPlanPage;