import React from 'react'
import useModel from './useModel'
const CustomHooks = () => {
    const[open,handleopen,handleclose]=useModel();
  return (
    <div>
        <button onClick={handleopen}>Open</button>
        {open && (
        <div>
        <h1>Yhea Bro</h1>
        <button onClick={handleclose}>Close</button>
        </div>
        )}
    </div>
  )
}

export default CustomHooks