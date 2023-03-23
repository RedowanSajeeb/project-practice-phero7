import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BestTopName name="redo" top="Top1-hero"></BestTopName>
      <BestTopName name=" Hero"></BestTopName>
      <BestTopName name="dahaka"></BestTopName>
      <h1>Section2</h1>
      <BestTopName2 Companny ="bd"></BestTopName2>
      <BestTopName2 Companny ="b5"></BestTopName2>
      <BestTopName2 Companny ="b58"></BestTopName2>
      <BestTopName2 Companny ="b965"></BestTopName2>
      <BestTopName2 Companny ="b85"></BestTopName2>
      <BestTopName2 Companny ="b585"></BestTopName2>
      <BestTopName2 Companny ="b55"></BestTopName2>
    </div>
  );
}
function BestTopName(props){
  console.log(props);
  return (
    <div className="div-class">
      <h1>TOp10:{props.name} {props.top}</h1>
    </div>
  );
}

function BestTopName2(props){
  console.log(props);
  return (
    <div className="div-class2">
      <h1>{props.Companny}</h1>
    </div>
  );
}

export default App;
