import React, { useState } from 'react'

const Control = () => {
    const[Value,setvalue]=useState("");
    function handleclick(e){
        e.preventDefault();
        console.log(Value)
    }
  return (
    <div>
        <input type="text" name="" id="" value={Value} onChange={(e)=>setvalue(e.target.value)}/>
        <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default Control