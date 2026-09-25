'use client'
import React, { useContext} from 'react';
import { X } from "@deemlol/next-icons"
import { IWorkoutType } from '@/type/workoutType';
import { workoutContext } from '@/context/workoutContext';
import { toast } from 'react-toastify';

interface RemoveCardProps{
    workout:IWorkoutType
}
const RemoveCard = ({workout}:RemoveCardProps) => {
    const{addPlan, setAddPlan, addSave, setAddSave}=useContext(workoutContext)

    const handleRemoveCard=()=>{
        setAddPlan(addPlan.filter(item => item.id !== workout.id))

        setAddSave(addSave.filter(item => item.id !== workout.id))

        toast.success("Item removed")
    }

    return (
        <div>
            <X onClick={()=>handleRemoveCard()} className='text-white text-3xl'></X>
        </div>
    );
};

export default RemoveCard;