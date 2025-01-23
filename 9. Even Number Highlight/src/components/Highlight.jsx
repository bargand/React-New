import React from 'react'

const highlight = () => {
    const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 
  return (
    <div>
        <h1>The Even Numbers are in Bold Latter</h1>
        <h1 style={{display: "flex", flexDirection: "row", gap: "15px"}}>
            {Numbers.map((number)=>(
                <h2 key={number} style={{fontWeight: number % 2 === 0 ? 'bold': 'normal', fontSize: "20px"}}>{number}</h2>
            ))}
        </h1>
    </div>
  )
}

export default highlight