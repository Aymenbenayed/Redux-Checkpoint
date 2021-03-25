import React  from 'react'
import {Card,Form}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Delete_Task, Done_Task } from '../Redux/actions'
import EditTask from './EditTask'
import deletebtn from '../assetes/deleteBtn.jpg'


const TaskCard = ({task}) => {
    const dispatch = useDispatch()
    return (
                <Card className="Task-Card" style={{ width: '18rem' }}>
                <div>
                <Form>
                    <Form.Check 
                        type="switch"
                        id={task.id}
                        label= {task.isDone? "Done":"Undone"} 
                        onClick={()=>dispatch(Done_Task(task.id))}
                    />
                </Form>
                </div>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                </Card.Body>
                <div className="ButtonCard">
                    <img src={deletebtn} 
                    alt="delete-button"
                    onClick={()=>dispatch(Delete_Task(task.id))}
                    className="deleteBtn" />
                    <EditTask task={task}/>
                </div>
            </Card>
    )
}

export default TaskCard
