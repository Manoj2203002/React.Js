import React, { useState } from 'react'
import { useMemo } from 'react';

const App = () => {
  const [add,setadd]=useState(0);
  const [sub,setsub]=useState(0);
  const mul=useMemo(()=>{
    console.log("love")
    return 2*add;
  },[add])
  return (
    <div>
      <h1>{add}</h1>
      <h1>{sub}</h1>
      <h1>{mul}</h1>
      <button onClick={()=>setadd(add+1)}>Add</button>
      <button onClick={()=>setsub(sub-1)}>Sub</button>
    </div>
  )
}

export default App
