import React,{useState} from 'react'
import Children from './Children'

const Parent = () => {
    const [count, setcount] = useState(0)
    console.log("Parent Render")
  return (
    <div>
        <button onClick={()=>(setcount(count+1))}>{count}</button>
        <Children/>
    </div>
  )
}

export default Parent