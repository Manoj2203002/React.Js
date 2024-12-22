import React, { useState } from 'react'

const Page = () => {
  const [Start,firstStart]=useState(0);
  return (
    <div>
      <h1>{Start}</h1>
      <button style={{padding:"10px",margin:"10px"}} onClick={()=>firstStart(Start+1)}>+</button>
    <button style={{padding:"10px",margin:"10px"}} onClick={()=>firstStart(Start-1) }>-</button></div>
  )
}

export default Page