import React, { useContext} from 'react';
import { X } from "@deemlol/next-icons"
import { IWorkoutType } from '@/type/workoutType';
import { workoutContext } from '@/context/workoutContext';

interface RemoveCardProps{
    workout:IWorkoutType
}
const RemoveCard = ({workout}:RemoveCardProps) => {
    const{addPlan, setAddPlan}=useContext(workoutContext)

    const handleRemoveCard=()=>{
        setAddPlan(addPlan.filter(item => item.id !== workout.id))
    }
    return (
        <div>
            <X onClick={()=>handleRemoveCard()} className='text-white text-3xl'></X>
        </div>
    );
};

export default RemoveCard;