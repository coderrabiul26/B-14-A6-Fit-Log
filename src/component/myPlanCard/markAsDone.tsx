'use client'

import React, { useState } from 'react'
import { Check } from "@deemlol/next-icons"
import { toast } from 'react-toastify'

const MarkAsDone = () => {

    const [isDone, setIsDone] = useState(false)

    const handleMarkAsDone = () => {
        setIsDone(true)
        toast.success('workout done')
    }

    return (
        <div>
            <button onClick={()=>handleMarkAsDone()} className={`py-2 px-4 rounded-xl cursor-pointer flex gap-2 ${isDone ? 'bg-[#c2f800]' : 'bg-gray-700 text-white'
                }`}>
                <Check />Mark as Done
            </button>
        </div>
    )
}

export default MarkAsDone