import React,{createContext,useState} from 'react';

export const TaskContext = createContext();

function ContextComponent(props) {
    const { task,setTask } = useState([
        {task: "Lets learn Javascript", id: 1},
        {task: "Lets learn Python", id: 2},
        {task: "Lets learn React Context", id: 3}
    ]);

    return (
        <TaskContext.Provider value={task}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default ContextComponent;
