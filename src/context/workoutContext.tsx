'use client'
import React, { createContext, ReactNode, useState } from 'react';

export const workoutContext= createContext({})

const WorkoutProvider = ({children}:{children:ReactNode}) => {

    const[addPlan, setAddPlan]=useState([])
    const[addSave, setAddSave]=useState([])

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