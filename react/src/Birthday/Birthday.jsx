import React, { useState } from 'react'
import List from './List'
import './Birthday.scss'
const Birthday = () => {
    const[Detials,setDetial]=useState(List);
  return (
    <div>
        <div className='div'>
        <main className='main'>
        <h1>{Detials.length} Birthday Today</h1>
    {Detials.map((item,index)=>{
        return <div className='main1'>
          <img  key={item} src={item.images} alt="" />
          <div key={item}>
            <h2>{item.Name}</h2>
                <div key={item} style={{textAlign:'center'}}>
                    <p>{item.age} years</p>
                </div>
          </div>
        </div>
        })}
        <button onClick={()=>setDetial([])}>ClearAll</button>
        </main>
        </div>
    </div>
    
  )
}

export default Birthday
