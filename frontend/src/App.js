import './App.css';
import { useDispatch } from 'react-redux';
import {fetchJsonData} from "./services/reduxState/FetchDataTemplate"

function App() {
  const dispatch = useDispatch()
  dispatch(fetchJsonData());
  return (
    <div className="App">
      
    </div>
  );
}

export default App; 