'use client'
import React, { useContext } from 'react';
import { Archive, Bookmark  } from "@deemlol/next-icons"
import { workoutContext } from '@/context/workoutContext';
import { IWorkoutType } from '@/type/workoutType';

const ButtonAction = ({workout}: {workout:IWorkoutType}) => {

    const{addPlan, setAddPlan, addSave, setAddSave}=useContext(workoutContext)

    const handleAddPlan=()=>{
        setAddPlan([...addPlan,workout])
    }
    
    const handleAddSave=()=>{
        setAddSave([...addSave,workout])
    }
    

    return (
        <div className='flex gap-3'>

            <button className='bg-[#c2f800] py-2 px-4 flex gap-2 rounded-xl cursor-pointer' onClick={()=>handleAddPlan()}> <Archive></Archive> Add to today's plan</button>


            <button className='bg-gray-700 py-2 px-4 flex gap-2 rounded-xl text-white cursor-pointer'  onClick={()=>handleAddSave()}> <Bookmark></Bookmark> Save for later</button>
            
        </div>
    );
};

export default ButtonAction;