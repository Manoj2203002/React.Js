import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Content from './Content'
const Routerdom = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/content" element={<Content/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routerdom
