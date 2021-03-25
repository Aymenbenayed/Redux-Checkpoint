import React, { useEffect} from 'react'
import{Navbar,Form,Button} from 'react-bootstrap'
import {useSelector}from 'react-redux'


const Filter = ({setTask_Filter,status_Filter,setStatus_Filter}) => {
    const taskList = useSelector(state => state.task)
    
    useEffect(() => {
        FilterTask()
        
    })
    
    const FilterTask =()=>{
        switch(status_Filter){
            case 'allTasks':setTask_Filter(taskList);break;
            case 'doneTasks':setTask_Filter(taskList.filter(el=>el.isDone === true)); break;
            case 'undoneTasks':setTask_Filter(taskList.filter(el=>el.isDone === false)); break;
            default: return taskList;
        }
    }
    
    return (
        

        <div >
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"> ToDO App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="Button_Filter">
                {/* className="Button_Filter" */}
                <Button variant="light"
                onClick={()=>setStatus_Filter('allTasks')}>All Tasks</Button>

                <Button variant="light"
                onClick={()=>setStatus_Filter('doneTasks')}>
                    Done Tasks</Button>

                <Button variant="light"
                onClick={()=>setStatus_Filter('undoneTasks')}>
                    Undone Tasks </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default Filter

