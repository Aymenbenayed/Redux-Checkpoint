
import {ADD_TASK,EDIT_TASK, DELETE_TASK, DONE_TASK} from './actionsTypes'
import {TaskData}from './State'

const initialState={
    task:TaskData
}
const reducer=(state =initialState, action)=>{
    
    switch (action.type) {

        case ADD_TASK:return{
            ...state,
            task:[...state.task,action.payload]
        };

        case EDIT_TASK:return{
            ...state,
            task:state.task.map(el=> el.id === action.payload.id?{...el,title:action.payload.newTitle}:el)
        };
        case DELETE_TASK: return{
            ...state,
            task:state.task.filter(el=>el.id !== action.payload)
        };

        case DONE_TASK: return{
            ...state,
            task:state.task.map(el=>
                el.id === action.payload? {...el, isDone : !el.isDone} : el)
        }
            default:
            return state;
    }
        }
export default reducer