import React,{useContext} from 'react';
import ContextComponent from './ContextComponent';
import './MainApp.css';
import Header from './Header'
import TaskList from './TaskList'
import TaskInput from './TaskInput'


function MainApp() {
    return (
        <ContextComponent> 
        <div className="mainApp">
            <Header />
            <div className="list_items">
                <TaskInput />
                <TaskList />   
            </div>
        </div>
        </ContextComponent>
    )
}

export default MainApp
