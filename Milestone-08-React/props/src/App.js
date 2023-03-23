import logo from './logo.svg';
import './App.css';

function App() {
  const idd = ["No:1", "No:2", "No:3", "No:4"];
  // eslint-disable-next-line no-lone-blocks

  return (
    <div className="App">
      {idd.map((i) => (
        <BestTopName>name={i}</BestTopName>
      ))}
      {idd.map((i) => (
        <li>name={i}</li>
      ))}

      {/* <BestTopName name="redo" pp="banglladesh" top="Top1-hero"></BestTopName>
      <BestTopName name=" Hero"></BestTopName>
      <BestTopName name="dahaka"></BestTopName> */}
      <h1>Section2</h1>
      <BestTopName2 name Companny="bdd"></BestTopName2>
      <BestTopName2 name Companny="b5"></BestTopName2>
      <BestTopName2 name Companny="b58"></BestTopName2>
      <BestTopName2 name Companny="b965"></BestTopName2>
      <BestTopName2 name Companny="b85"></BestTopName2>
      <BestTopName2 name Companny="b585"></BestTopName2>
      <BestTopName2 name Companny="b55"></BestTopName2>
    </div>
  );
}
function BestTopName(props){
  console.log(props);
  return (
    <div className="div-class">
      <h1>TOp10:{props.name} </h1>
      <h5>TOp10:{props.pp} </h5>
    </div>
  );
}

function BestTopName2(props){
  console.log(props);
  return (
    <div className="div-class2">
      <h1>{props.idd}</h1>
      <h1>{props.Companny}</h1>
    </div>
  );
}

export default App;
