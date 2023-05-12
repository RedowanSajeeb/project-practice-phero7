import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
const coffeesLodaded = useLoaderData()
const [coffees, setCoffees] = useState(coffeesLodaded);
// console.log(coffees);
  return (
    <div className="md:ms-28 md:me-28 md:mt-10">
      <h1 className="text-5xl text-orange-900">Coffees Hot Hot Cool</h1>
      <div className="flex flex-col items-center mt-5 mb-10">
        <p>--- Sip & Savor ---</p>
        <h2>Our Popular Products</h2>
        <Link>Add Coffee</Link>
      </div>
      <div className="grid md:grid-cols-2 md:gap-7">
        {coffees.map((cofe) => (
          <CoffeeCard
            key={cofe._id}
            coffee={cofe}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App
