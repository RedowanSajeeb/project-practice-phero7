import { Link, useLoaderData } from 'react-router-dom';
import './App.css'
import HomeChocolate from './components/HomeChocolate';

function App() {
  const chocolatess = useLoaderData()
  // console.log(chocolatess);

  return (
    <div className="md:p-20 bg-[#FFFFFF]  bordered border rounded-xl m-3 md:m-10 shadow">
      <div>
        <h1 className=" mx-auto md:w-1/4 text-center h-auto p-5 font-semibold text-white text-2xl flex items-center justify-center radial ">
          Chocolate Management System
        </h1>
      </div>
      <Link to={"/newChocolate"}>
        <>
          <button className="btn btn-outline  ">+ New Chocolate 🍫</button>
        </>
      </Link>
      <HomeChocolate chocolate={chocolatess}></HomeChocolate>
    </div>
  );
}

export default App
