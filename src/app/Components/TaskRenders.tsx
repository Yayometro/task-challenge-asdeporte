"use client"
import React from 'react'
import { taskType } from './TaskManager'
import Task from './Task'
import { useAppSelector } from '@/redux/hooks'


interface props {
    onEdition: (task: taskType) => void
}


function TaskRenders({onEdition}:props) {
    const taskGlobalState = useAppSelector(state => state.task)
    
  return (
    <div className='w-full  px-2 flex flex-col gap-2 pt-5 items-center justify-start'>
        {
            !taskGlobalState || taskGlobalState.length === 0 ? (
                <div className='text-center p-3'>{"No task to display, create one!" }</div>
            ): (
                <div className="w-full h-full">
                    <div className="undone flex flex-col gap-2 items-center justify-center">
                    <p>To do:</p>
                        {
                            taskGlobalState.filter(t => !t.active).map(t => (
                                <Task task={t} key={t.id} onEdition={onEdition}/>
                            ))
                        }
                    </div>
                    <div className="done flex flex-col gap-2 items-center justify-center">
                        <p>Checked:</p>
                        {
                            taskGlobalState.filter(t => t.active).map(t => (
                                <Task task={t} key={t.id} onEdition={onEdition}/>
                            ))
                        }
                    </div>
                </div>
                
            )
        }
    </div>
  )
}

export default TaskRenders