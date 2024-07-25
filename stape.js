// FAST
// rafc  :  créer une classe
// rfce :  créer une fonction

// 1 - Install : npm install react-router-dom
// 2 -    New  :  create-react-app nom-du-projet

// 3 - New components : "./src/components/Home/Home.js
// 4 - In Home.js : 
// import React from 'react'
// function Home() {
//   return (
//     <div><header className="App-header">
//       <h1>Bienvenue sur mon site</h1>
//       <p>Ceci est un exemple.</p>
//     </header></div>
//   )
// }
// export default Home

// 5 - Edit index.js : 
// add : import { BrowserRouter } from 'react-router-dom';
// replace : <React.StrictMode><App /></React.StrictMode> 
//      to : <BrowserRouter><App /></BrowserRouter>

// 6 - In App.js : 
// import React from 'react'
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
// function App() {
//   return (
//     <div >
//       <Routes> 
//         <Route path="/" element={<Home/>}/>
//     </Routes>
//     </div>
//   )
// }
// export default App

