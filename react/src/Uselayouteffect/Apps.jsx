import React, { useLayoutEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [data,setdata]=useState(0);
  useLayoutEffect(()=>{
    document.title=`${data}`
  })
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>setdata(data+1)}>Click</button>
    </div>
  )
}

export default App
