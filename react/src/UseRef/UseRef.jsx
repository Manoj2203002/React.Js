import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
     const ref=useRef();
     function Clik(){
        ref.current.focus();
        console.log("Inputref",ref)
     }
  return (
    <div>
      <input type="text" ref={ref}/>
      <button onClick={Clik}>click</button>
    </div>
  )
}

export default UseRef
