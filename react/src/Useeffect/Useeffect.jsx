import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[value,setvalue]=useState(0)
    const[data,setData]=useState("");
    useEffect(()=>{
        document.title=`${value} ${data}`;
        let a=document.getElementById('btn2');
        a.addEventListener('click',()=>{
            document.body.style.backgroundColor="black"
        })
    },[])
  return (
    <div>
        <h1>{value}{data}</h1>
        <input type="text" onChange={(e)=>setData(e.target.value)} />
        <button id="btn1" onClick={()=>setvalue(value+1)}>Value</button>
        <button id="btn2" >Click</button>
    </div>
  )
}

export default Useeffect