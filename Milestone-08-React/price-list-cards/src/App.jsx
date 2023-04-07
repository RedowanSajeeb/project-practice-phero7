import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav-bar/Navbar'
import Price from './components/price/Price'
import DashBoard from './components/dashBoard/DashBoard'
import PhoneBar from './components/Phonebar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl    text-blue-700 mt-5'> Hey Hlw Frome Tailwind!!</h1>
     <Price></Price>
     <DashBoard></DashBoard>
     <PhoneBar></PhoneBar>
    </div>
  )
}

export default App