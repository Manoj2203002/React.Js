import React, { useState, useCallback } from 'react'
import Child from './Child';
const UseCallback = () => {
    const [count,setcount]=useState(0);
    const problem=useCallback(()=>{},[])
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>Incresas</button>
      <Child problem={problem}/>
    </div>
  )
}

export default UseCallback
