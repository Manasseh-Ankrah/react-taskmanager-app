import React,{useContext} from 'react';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Create';
import './TaskItem.css';
import {TaskContext} from './ContextComponent'

function TaskItem({tasks,deleteItems,findItems}) {
    // const {deleteItems} = useContext(TaskContext);
    // console.log(tasks.id);
    return (
        <li className="taskItem">
        <div className="taskItem_title">
                <span>{tasks.taskItem}</span>              
        </div>
        <div className="taskItem_fxn">
            <Delete className="taskItem_actions" onClick={()=> {deleteItems(tasks.id)}}/>
            <Edit className="taskItem_actions" onClick={()=> {findItems(tasks.id)}}/>
        </div>
        
    </li>
    
    )
}

export default TaskItem;
