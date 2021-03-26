import React,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './TaskInput.css';
import {TaskContext} from './ContextComponent';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200 
    },
  },
}));

function TaskInput() {
  const [inputValue,setInputValue] = useState("");
  
  const {task,clearAll,addTask} = useContext(TaskContext);
  console.log(task);

  const handleSubmitTask =()=> {
    if(inputValue === "") {return };
    addTask(inputValue)
    if(inputValue) {alert("Add Task")}
    setInputValue("");

  }


    const classes = useStyles();
    return ( 
        <div className="taskInput"> 
           <TextField
               label="Input Text.."
               id="outlined-size-small"
               className="taskInput__textfield"
               required="required"
               variant="outlined"
               size="small"
               style={{backgroundColor: "white"}}
               value= {inputValue}
               onChange= {(e)=> setInputValue(e.target.value)}
           />
        <div className="taskInput__btn">
            <Button variant="contained" color="primary" style={{marginRight: 20}} onClick={ handleSubmitTask}>
                Add Task
            </Button>
            <Button variant="contained" color="primary" onClick={clearAll}>
                Clear All
            </Button>

        </div>
        </div>
    )
}

export default TaskInput;
