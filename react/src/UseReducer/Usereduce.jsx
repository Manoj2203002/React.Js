import React from 'react'
import { useReducer } from 'react';

const Usereduce = () => {
    const i=0;
    const[state,dispatch]=useReducer(reducer,i);
    function reducer(state,action){
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'mul':
            return state *2;
    }
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch('increment')}>Add</button>
        <button onClick={()=>dispatch('decrement')}>Sub</button>
        <button onClick={()=>dispatch('mul')}>Mul</button>
    </div>
  )
}

export default Usereduce