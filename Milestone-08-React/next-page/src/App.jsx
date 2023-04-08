import { useState } from 'react'
import './App.css'
import NavHeader from './Components/NavHeader'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <div className="App containar1">
      <NavHeader></NavHeader>
      <Outlet></Outlet>
    </div>
  );
}

export default App
