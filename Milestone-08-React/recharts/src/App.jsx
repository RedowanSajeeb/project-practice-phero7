import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StackedAreaChart from './componesnts/first-charts/StackedAreaChart'
import SimpleBarChart from './componesnts/sec/SimpleBarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StackedAreaChart>

      </StackedAreaChart>
      <SimpleBarChart></SimpleBarChart>
        
    </div>
  )
}

export default App
