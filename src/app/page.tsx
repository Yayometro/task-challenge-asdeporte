"use client"
import ReduxProvider from "@/redux/reduxProvider";
import TaskManager from "./Components/TaskManager";


export default function Home() {
  return (
    <div className="main h-screen w-screen bg-black flex justify-center items-center">
      <ReduxProvider>
        <TaskManager />
      </ReduxProvider>
    </div>
  );
}
