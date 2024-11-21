// import { taskType } from "@/app/Components/TaskManager"
import { taskType } from "@/app/Components/TaskManager"
import {createSlice} from "@reduxjs/toolkit"

// 1 config initial state
const tasksInitialState : Array<taskType>  = []

// creeate the slice and config
export const taskSlice = createSlice({
    name: "task",
    initialState: tasksInitialState,
    reducers: {
        getTasks: (state) => {
            return state
        },
        addTask: (state, action) => {
            state.push(action.payload); // Añade la nueva tarea al estado
          },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action) => {
            return state.map(task => {
              if (task.id === action.payload.id) {
                return { ...task, ...action.payload };
              }
              return task;
            });
          },
          
    }
})

export const {getTasks, addTask, removeTask, updateTask} = taskSlice.actions
export default taskSlice.reducer
