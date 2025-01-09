import React from 'react'
import Handlecounter from './Handlecounter'
const Counter = (props) => {
  return (
    <div>
    <h1>Count::{props.Count}</h1>
    <button onClick={props.handleincrement}>Increment</button>
    <button onClick={props.handledecrement}>Decrement</button>
    </div>
  )
}

export default Handlecounter(Counter);
