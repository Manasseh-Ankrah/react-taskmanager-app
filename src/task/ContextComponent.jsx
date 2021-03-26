import React,{createContext,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

function ContextComponent(props) {
    const [ task,setTask ] = useState([
        {taskItem: "Lets learn Javascript", id: uuidv4()},
        {taskItem: "Lets learn Python", id: uuidv4()},
        {taskItem: "Lets learn React Context", id: uuidv4()}
    ]);

    const [edit,setEdit] = useState(null);

    const deleteItems = (id) => {
        const deleteMe = task.filter(item => item.id !== id)
        setTask(deleteMe);
    }

    const clearAll = () => {
        setTask([]);
    }

    const addTask =(appendTask) => {
        const newTask = [...task, {taskItem:appendTask,id: uuidv4()}];
        setTask(newTask);
    }

    const findItems= (id) => {
        const edit_item = task.find(edit => edit.id === id );
        setEdit(edit_item);
        console.log(id)
    }

    // const editTask =(id)=> {
    //     const newTask = task.map(item => {item.id ? {taskItem,id} : task});
    //     setTask(newTask);
    // }

    return (
        <TaskContext.Provider value={{task,deleteItems,clearAll,addTask,findItems}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default ContextComponent;
