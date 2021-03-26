import React,{useContext,useState} from 'react';
import './TaskList.css'
import {TaskContext} from './ContextComponent';
import ContextComponent from './ContextComponent';
import TaskItem from './TaskItem';


function TaskList() {
    const [displayText,setDisplayText] = useState(false)
    const {task,deleteItems,findItems} = useContext(TaskContext); 
    console.log(task);

    if(task.length === 0) {
        console.log("Empty!!!")
        return(
            <div className="no_Task">
              <h3>No Task</h3>
            </div>
        )
    }
    return (
        <ContextComponent> 
        <ul> 
                {task.map((item) => {
                return(
                    <TaskItem tasks={item}  key={item.id} deleteItems={deleteItems} findItems={findItems}/>
                      )
               })}
            </ul> 
            
                
            
           
           
        </ContextComponent>
    )
}

export default TaskList;
