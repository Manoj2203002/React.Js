import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[value,setvalue]=useState({name:"",age:""});
    const navigate=useNavigate();
    function handle(e){
        e.preventDefault();
        axios.post("http://localhost:3000/users",value).then((res)=>{
            console.log(res.data)
        });
        navigate("/");
    }jfm
  return (
    <div>
        <div className='form'>
            <form action="" onSubmit={handle}>
                <h1>Create data</h1>
                <input type="text" name="" id="" onChange={(e)=>setvalue({...value,[e.target.name]:e.target.value})} />
                <input type="email" name="" id=""  onChange={(e)=>setvalue({...value,[e.target.name]:e.target.value})}/>
            </form>
        </div>
    </div>
  )
}

export default Home