import React,{useState} from 'react'

const Dropdown = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggelMode=()=>{
        setisOpen(!isOpen)
    }
  return (
    <div>
        <button onClick={toggelMode}>{isOpen? "Close Menu": "Open Menu"}</button>
        {isOpen &&(
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        )}
    </div>
  )
}

export default Dropdown