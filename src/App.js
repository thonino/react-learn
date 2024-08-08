import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import UseState from './components/Hook/Hook-useState';

function App() {
  return (
    <div >
      <Routes> 
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/usestate" element={<UseState/>}/> */}
      </Routes>
    </div>
  )
}

export default App
