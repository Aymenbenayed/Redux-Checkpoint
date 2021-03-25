import React,{useState} from 'react'
import{Modal,Button,Form}from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Edit_Task } from '../Redux/actions';
import edit from '../assetes/editBtn.jpg'

const EditTask = ({task}) => {
    const [show, setShow] = useState(false);

    const [editTask, setEditTask] = useState(task.title)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    return (
        <div>
                    <img src={edit}
                    className="edit-btn"
                    alt="edit-icon"
                    onClick={()=>{
                        dispatch(Edit_Task())
                        handleShow()
                    }}/>
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Control type="Edit Task" placeholder="Edit Task"
                onChange={(e)=>setEditTask(e.target.value)}
                value={editTask} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="success"
                    onClick={()=>{
                        dispatch(Edit_Task(task.id,editTask))
                        handleClose()
                        }} >Edit</Button>
                </Modal.Footer>
                </Modal>
        </div>
    )
}

export default EditTask
