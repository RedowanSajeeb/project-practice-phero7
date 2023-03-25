import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      {/* <RestCountrisApi></RestCountrisApi> */}
      {/* <Country></Country> */}
      <Country></Country>
      
    </div>
  );
}
function RestCountrisApi(){
  const [countris,setCountris] = useState([]);
  useEffect(()=>{
   fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountris(data));
  },[])
  return (
    <div>
      <h1>Visiting Every country of the world-!!!</h1>
      {/* <h1>{countris.length}</h1> */}
      {/* {countris.map((country) => (
        <Ccountry Name={country.name.common} region={country.region}></Ccountry>
      ))} */}

    </div>
  );
}

function Ccountry(props){
  return (
    <div>
      <h3>Country Name: {props.Name}</h3>
      <h6>region: {props.region}</h6>
    </div>
  );
}
export default App;
