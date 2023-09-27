import React from 'react'

function Arrow() {
    var numbers = [4, 9, 16, 25];
    var x = numbers.map(Math.sqrt);

  return (
    <>
       {
        numbers.map((item)=>(
            <p>{item}</p>
        ))
       }
    </>
    
  )
}

export default Arrow