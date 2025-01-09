import React, { useState } from 'react'

const UseModel = () => {
    const [open,setopen]=useState(false);
    function handleopen(){
        setopen(!open);
    }
    function handleclose(){
        setopen(false);
    }
  return [
    open,
    handleopen,
    handleclose,
]
};

export default UseModel