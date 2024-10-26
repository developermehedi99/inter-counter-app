import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateTasks = ({handleAddTask}) => {
    const [text, setText] = useState('');

    return (
        <div>
            <input style={{padding:'5px'}} type="text" onChange={()=> setText(event.target.value)} placeholder="type task" /> <br /> 
            <button 
            onClick={()=> {
                 handleAddTask(text);
                
            }}>add task</button>
        </div>
    );
};

export default CreateTasks;