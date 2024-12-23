import React, { useState } from 'react'
import './Birthday.scss'
import List from './List'
const Birthday = () => {
  const[Data,setdata]=useState(List)
  return (
    <div>
      <main className='main'>
      <div className='contine'>
        <h1>{Data.length} Numbers Birthday</h1>
        {Data.map((index,Input)=>{
          return <div className='manoj' key={index}>
                <div className='image'><img src={index.images} alt="profile" /></div>
                <div className='imag'>
                <h2>{index.Name}</h2>
                <p>{index.age} years old</p>
               </div> 
               </div>
        })}
        <button onClick={()=>{setdata([])}}> Clear all</button>
      </div>
      </main>
    </div>
  )
}

export default Birthday
