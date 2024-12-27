import React,{useState} from 'react'

const Open = () => {
    const[open,setopen]=useState(false);
  return (
    <div>

        <button onClick={()=>setopen(true)}>open</button>
        {
            open&&(
                <div>
                    <h1>Hi Weloome</h1>
                    <button onClick={()=>setopen(false)}>❌</button>
                </div>
               
        )
        }
    </div>
  )
}

export default Open
