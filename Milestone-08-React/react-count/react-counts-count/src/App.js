import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <Display></Display>
    </div>
  );
}
function Display(){
  const [count, setCount] = useState(5);

  const incRCount =() => setCount(count+1)
  const disincRCount = () => setCount(count -1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incRCount}>Inc++</button>
      <button onClick={disincRCount}>Inc++</button>
    </div>
  )
}

export default App;
