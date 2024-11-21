import React from "react";
import { taskType } from "./TaskManager";
import { useAppDispatch } from "@/redux/hooks";
import { removeTask, updateTask } from "@/redux/features/taskSlice";

interface props {
  task: taskType;
  onEdition: (task: taskType) => void
}

function Task({ task, onEdition}: props) {
  
  const dispatch = useAppDispatch();
  const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newActive = e.target.checked;
    dispatch(updateTask({ ...task, active: newActive }));
  };
  
  return (
    <div className="w-[300px] h-[50px] bg-slate-600 flex rounded-md overflow-hidden hover:bg-slate-500">
        <span className="task-content w-full flex justify-center items-center">
            <div className={`title w-full px-4 ${task.active ? "line-through" : ""}`}>{task.title}</div>
            <div className="checkedBox px-5" >
                <input
                type="checkbox"
                name="active"
                checked={task.active}
                onChange={handleActiveChange}
                className="h-5 w-5 bg-gray-200 border-gray-300 focus:ring focus:ring-offset-2 focus:ring-blue-500 appearance-none checked:bg-blue-600 checked:border-transparent rounded-full border-2 "
/>
            </div>
        </span>
      <div className="actionsSection flex flex-col w-[20%] h-full">
        <button
          className="h-full w-full bg-red-300 hover:bg-red-400"
          onClick={() => dispatch(removeTask(task.id))}
        >
          ❌
        </button>
        <button
          className="h-full w-full bg-blue-300 hover:bg-blue-400"
          onClick={() => onEdition(task)}
        >
          🖋️
        </button>
      </div>
    </div>
  );
}

export default Task;
