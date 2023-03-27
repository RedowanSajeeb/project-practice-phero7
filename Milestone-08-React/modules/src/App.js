import './App.css';
import Cosmatis from './compoents/cosmatics/cosmatis';
import Mocks from './compoents/mockapi-data/Mocks';
import Shows from './compoents/shows/Shows';

function App() {
  return (
    <div className="App">
    <Cosmatis></Cosmatis>
    {/* <Shows></Shows> */}
    <Mocks></Mocks>
    </div>
  );
}

export default App;
