
import { useState} from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Filter from './Components/filter';
import ListTask from './Components/ListTask';

function App() {
  const [status_Filter, setStatus_Filter] = useState("")
  const [task_Filter, setTask_Filter] = useState([])
  return (
    <div className="App">
      <Filter setTask_Filter={setTask_Filter} status_Filter={status_Filter} setStatus_Filter={setStatus_Filter} />
      <AddTask/>
      <ListTask task_Filter={task_Filter} status_Filter={status_Filter} />
    </div>
  );
}

export default App;
