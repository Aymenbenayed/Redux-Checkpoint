import{ADD_TASK,EDIT_TASK,DELETE_TASK, DONE_TASK} from './actionsTypes'

export const Add_Task=(task)=>{
    return{
        type:ADD_TASK,
        payload:task,
    }
}
export const Edit_Task=(id,newTitle)=>{
    return{
        type:EDIT_TASK,
        payload:{id,newTitle},
    }
}
export const Delete_Task=(task)=>{
    return{
        type:DELETE_TASK,
        payload:task,
    }
}
export const Done_Task=(val)=>{
    return{
        type:DONE_TASK,
        payload:val,
    }
}