import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  const [Mode, setMode] = useState("light")
  const [Text, setText] = useState("Enable Dark Mode")

  const toggelMode =()=>{
    if (Mode === "dark") {
      setMode("light")
      document.body.style = "light"
      setText("Enable Dark Mode")
    }
    else{
      setMode("dark")
      document.body.style = "dark"
      setText("Enable Light Mode")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode ={Mode} toggelMode={toggelMode} text={Text}/>
    <Routes>
      <Route element={<Body mode={Mode}/>} path='/'/>
      <Route element={<About mode={Mode}/>} path='/about'/>
      <Route element={<Contact mode={Mode}/>} path='/contact'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App