import React, { useContext } from 'react'
import { NameContext } from '../App'
import { AgeContext } from '../App'
const Child3 = () => {
    const name=useContext(NameContext)
    const age=useContext(AgeContext)
  return (
    <div>
      <h1>My name is {name} and my age is {age}</h1>
    </div>
  )
}

export default Child3
