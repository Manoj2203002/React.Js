import React, { useState } from 'react'

const Spreadoperator = () => {
    const[data,setdata]=useState([]);
    const[value,setvalue]=useState("");
    function Handle(){
        setdata([...data,value]);
        setvalue("");
    }
    function remove(index){
      
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setvalue(e.target.value)}/>
        <button type="button" onClick={Handle}>Add</button>
        {data.map((item,index)=>{
            return (<div><p key={index}>{item}</p>
            <button onClick={remove(index)}> remove</button>
            </div>)
        })}
    </div>
  )
}

export default Spreadoperator