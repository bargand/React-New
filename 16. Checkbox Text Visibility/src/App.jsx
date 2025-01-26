import React,{useState} from 'react'
import "./App.css"
import Body from './components/Body'

const App = () => {
  const [mode, setmode] = useState("light")

  const toggelMode =()=>{
    if (mode === "dark") {
      setmode("light")
      document.body.style = "light"
    }
    else{
      setmode("dark")
      document.body.style = "dark"
    }
  }
  return (
    <div className='app'>
      <Body toggelMode={toggelMode} mode={mode}/>
    </div>
  )
}

export default App