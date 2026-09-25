'use client'
import { IWorkoutType } from '@/type/workoutType';
import React, { createContext, ReactNode, useState } from 'react';

export interface IWorkoutContextType{
    addPlan:IWorkoutType[],
    setAddPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>,
    addSave: IWorkoutType[],
    setAddSave: React.Dispatch<React.SetStateAction<IWorkoutType[]>>
}

export const workoutContext= createContext<IWorkoutContextType>({
    addPlan:[],
    setAddPlan: ()=>{},
    addSave:[],
    setAddSave:()=>{}

})

const WorkoutProvider = ({children}:{children:ReactNode}) => {

    const[addPlan, setAddPlan]=useState<IWorkoutType[]>([])
    const[addSave, setAddSave]=useState<IWorkoutType[]>([])

    const sharedData={
        addPlan,
        setAddPlan,
        addSave,
        setAddSave
    }

    return (
        <div>
            <workoutContext.Provider value={sharedData}>
                {children}
            </workoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;