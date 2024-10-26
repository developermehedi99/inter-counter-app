import { useState } from "react";
import CreateTasks from "./CreateTasks";
import ShowTask from "./ShowTask";


const MainTask = () => {
    const [tasks, setTasks] = useState('');

   const handleAddTask=text=>{
    const task  = {
        text,
        isComplead: false,
        createAt: new Date(),
        id: crypto.randomUUID(),
    }
    setTasks([...tasks, task])
   }
    return (
        <div>
            <h1>Tasks..</h1>
            <CreateTasks handleAddTask={handleAddTask}></CreateTasks>
            <ShowTask tasks={tasks}></ShowTask>
        </div>
    );
};

export default MainTask;