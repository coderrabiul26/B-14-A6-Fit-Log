'use client'
import React, { useContext } from 'react';
import { Archive, Bookmark  } from "@deemlol/next-icons"
import { workoutContext } from '@/context/workoutContext';
import { IWorkoutType } from '@/type/workoutType';
import { toast } from 'react-toastify';

interface IButtonActionProps{
    workout:IWorkoutType
}

const ButtonAction = ({workout}: IButtonActionProps) => {

    const{addPlan, setAddPlan, addSave, setAddSave}=useContext(workoutContext)

    
    const handleAddPlan = () => {
    const alreadyAdded = addPlan.some(item => item.id === workout.id)
    if (alreadyAdded) {
        toast.warning("Already in your plan")
        return
    }
    setAddPlan([...addPlan, workout])
    toast.success("Added to today's plan")
    }
    

    const handleAddSave = () => {
    const alreadyAdded = addSave.some(item => item.id === workout.id)
    if (alreadyAdded) {
        toast.warning("Already in your plan")
        return
    }
    setAddSave([...addSave, workout])
    toast.success("Saved for later")
    }
    

    return (
        <div className='flex gap-3'>

            <button className='bg-[#c2f800] py-2 px-4 flex gap-2 rounded-xl cursor-pointer' onClick={()=>handleAddPlan()}> <Archive></Archive> Add to today's plan</button>


            <button className='bg-gray-700 py-2 px-4 flex gap-2 rounded-xl text-white cursor-pointer'  onClick={()=>handleAddSave()}> <Bookmark></Bookmark> Save for later</button>
            
        </div>
    );
};

export default ButtonAction;