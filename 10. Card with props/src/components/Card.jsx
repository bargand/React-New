import React from 'react'
import './Card.css'

const Card = ({title,decsription}) => {
  return (
    <div className='card'>
        <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" alt="img" />
        <h1>{title}</h1>
        <p>{decsription}</p>
    </div>
  )
}

export default Card