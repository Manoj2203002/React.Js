import React, { useState } from 'react'

const Dynamic = () => {
    const [Name,setname]=useState("")
  return (
    <div>
      <input onChange={(e)=> setname(e.target.value)} />
      <h1>My name is {Name}</h1>
    </div>
  )
}
export default Dynamic
