import React from 'react'

const Javascript = () => {
    function manoj(){
        alert("Manoj")
    }
    function Gayathri(){
        let a=  document.body;
     a.style.background="green";
    }
  return (
    <div><button onClick={manoj}>Click</button>
    <button onClick={Gayathri}>Color</button>
    </div>
  )
}

export default Javascript