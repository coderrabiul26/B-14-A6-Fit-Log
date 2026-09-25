'use client'
import AddPlanCard from '@/component/myPlanCard/addPlanCard';
import AddSaveCard from '@/component/myPlanCard/addSaveCard';
import { workoutContext } from '@/context/workoutContext';
import { IWorkoutType } from '@/type/workoutType';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { addPlan, addSave } = useContext(workoutContext);

    return (
        <div className="container mx-auto">
            <div role="tablist" className="tabs tabs-lift">
                {/* Tab 1 */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab"
                    aria-label="Today's Plan"
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box">
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
                            <button className="bg-[#c2f800] py-2 px-4 font-bold rounded-full text-black">Go to workouts</button>
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
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box">
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
    );
};

export default MyPlanPage;