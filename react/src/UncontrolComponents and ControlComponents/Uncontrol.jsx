import React, { useRef } from 'react'

const Uncontrol = () => {
    const inputref=useRef();
    function Handleclick(){
    console.log(inputref.current.value)
    }
  return (
    <div>
        <input type="text" name="" id="" ref={inputref}/>
        <button  onClick={Handleclick}>Click</button>
    </div>
  )
}

export default Uncontrol