import React, { useEffect, useState } from "react";
import { taskType } from "./TaskManager";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTask, updateTask } from "@/redux/features/taskSlice";

function TaskForm({
  task,
  onEdition
}: {
  task?: taskType | null;
  onEdition: (task:taskType|null) => void
}) {
  const [titleTask, setTitleTask] = useState<string>("");

  const dispatch = useAppDispatch();
  const taskFromRedux = useAppSelector(state => state.task.find(t => t.id === task?.id))

  useEffect(() => {
    if (task?.title) {
      setTitleTask(task.title);
    }
  }, [task]);

  const handleSubmit = () => {
    if(taskFromRedux){
        const updatedTask = {...taskFromRedux, title: titleTask}
        dispatch(updateTask(updatedTask))
        onEdition(null)
    } else {
      const newTask = {
        id: window.crypto.randomUUID(),
        title: titleTask,
        date: new Date().toISOString(),
        active: false,
      };
        dispatch(addTask(newTask))
    }
    setTitleTask("");
  };
  return (
    <div className="form w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl py-4 font-bold">
        {!task?.title ? "Create a new task" : task?.title}
      </h1>
      <section className="flex flex-col justify-end items-center text-base">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Buy milk"
          className=" py-1 px-2 rounded-lg text-black"
          value={titleTask}
          onChange={(e) => setTitleTask(e.currentTarget.value)}
        />
      </section>

      <button
        className="px-2 py-1 rounded-lg bg-blue-700 mt-3 text-white "
        onClick={handleSubmit}
      >
        {!task?.title ? "Submit" : "Edit"}
      </button>
    </div>
  );
}

export default TaskForm;
