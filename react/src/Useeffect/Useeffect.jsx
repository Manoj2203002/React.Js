import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[value,setvalue]=useState(0)
    const[data,setData]=useState("");
    useEffect(()=>{
        document.title=`${value} ${data}`
    },[value,data])
  return (
    <div>
        <h1>{value}{data}</h1>
        <input type="text" onChange={(e)=>setData(e.target.value)} />
        <button id="btn1" onClick={()=>setvalue(value+1)}>Value</button>

    </div>
  )
}

export default Useeffect