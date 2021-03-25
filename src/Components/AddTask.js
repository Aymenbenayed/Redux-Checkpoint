import React,{useState}from 'react';
import {useDispatch}from 'react-redux';
import {InputGroup,FormControl}from 'react-bootstrap'
import {Add_Task}from '../Redux/actions'
import addBtn from '../assetes/addBtn.jpg'
const AddTask = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');
    return (
        
            <div className="AddTask">
                <InputGroup className="mb-3 Formulaire ">
                    <FormControl
                    onChange={(e)=>setNewTask(e.target.value)}
                    value={newTask}
                    placeholder="Add Task"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                    <img src={addBtn} 
                    alt="add-Btn"
                    className="deleteBtn" 
                    onClick={()=> {dispatch(Add_Task({
                        title: newTask,
                        isDone:false,
                        id:Math.ceil(Math.random()*100)}))
                        setNewTask('')}} />
                </InputGroup>
            
        </div>
    )
}

export default AddTask
