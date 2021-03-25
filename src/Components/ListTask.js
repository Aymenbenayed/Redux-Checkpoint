import React from 'react'
import {useSelector}from 'react-redux'
import '../App.css'

import TaskCard from './TaskCard'

const ListTask = ({task_Filter,status_Filter}) => {
    const TaskData = useSelector(state => state.task)
    return (
        <div className="List_Task">
            {status_Filter === "undoneTasks" || status_Filter==="doneTasks" ?
            task_Filter.map(task => <TaskCard task={task} key={task.id}/>):
            TaskData.map(task => <TaskCard task={task} key={task.id}/>)}
        </div>
    )
}

export default ListTask
