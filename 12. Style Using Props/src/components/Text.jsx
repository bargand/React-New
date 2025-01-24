import React,{useState} from 'react'

const Text = ({visible, invisible, visualize, nonVisualize,color}) => {
    const [isVisible, setisVisible] = useState(nonVisualize)
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", padding: "100px", borderRadius: "20px"}}>
        <h1 style={{color}}>{isVisible? visible: invisible}</h1>
        <button onClick={()=>(setisVisible(isVisible? nonVisualize: visualize))} style={{width: "500px", height: "50px", cursor: "pointer", fontFamily: "cursive", fontSize: "16px"}}>{isVisible? "Switch to Non-visible":"Switch to Visible"}</button>
    </div>
  )
}

export default Text