import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import TestCard from './pages/TestCard'
import Board from './pages/Board'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<TestCard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>  
        </Routes>
      </Router>

  )
}

export default App
