import React,{useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <div className='counter'>
        <div>
        <h1>{count}</h1>
        </div>
        <div>
        <button className='button' onClick={()=>{setcount(count+1)}}>Increase</button>
        <button className='button' onClick={()=>{setcount(count-1)}}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter