"use client"
import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskRenders from './TaskRenders'


export interface taskType {
    id: string,
    title: string,
    date: Date,
    active: boolean
}

function TaskManager() {
    const [tasktTemp, setTasktTemp] = useState<taskType|null>()

    const onEdition = (task:taskType|null) => {
        setTasktTemp(task)
    }
  return (
    <div className='w-[50%] h-[80%] bg-slate-800 text-white rounded-xl'>
        <TaskForm  task={tasktTemp} onEdition={onEdition}/>
        <TaskRenders onEdition={onEdition} />
    </div>
  )
}

export default TaskManager