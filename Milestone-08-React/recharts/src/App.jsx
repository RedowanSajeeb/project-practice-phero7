import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StackedAreaChart from './componesnts/first-charts/StackedAreaChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StackedAreaChart>
        
      </StackedAreaChart>
        
    </div>
  )
}

export default App
