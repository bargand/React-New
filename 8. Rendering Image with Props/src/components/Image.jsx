import React from 'react'
import './Image.css'

const Image = (props) => {
  return (
    <div className='image_container'>
        <img src={props.link} alt="img" style={{width: "300px", height: "300px"}} />
        <h1>om namah shivay</h1>
    </div>
  )
}

export default Image