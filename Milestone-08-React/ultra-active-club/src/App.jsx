import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App mx-72">
      <h1 className='text-3xl mb-5 font-bold mt-5'>ultra-active-club</h1>
      <Card></Card>
    </div>
  )
}

export default App
