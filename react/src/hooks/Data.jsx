import React, { useState } from 'react'

const Data = () => {
  const [Detials,setDetial]=useState(["Manoj","Gayathri","Sharmitha","Pushpa","Pram","Aravind"])
  return (
    <div>
      <h1>{Detials.length}</h1>
      {Detials.map((item,index)=>{
        return <div key={item}>{index} {item}
        </div>
      })}
         <button onClick={()=>setDetial([])}>Clear</button>
          </div>
  )
}

export default Data