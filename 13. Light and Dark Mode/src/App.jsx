import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './components/Body'

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
    <Navbar mode ={Mode} toggelMode={toggelMode} text={Text}/>
    <Body mode={Mode}/>
    </>
  )
}

export default App