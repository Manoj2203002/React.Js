import React, { Suspense } from 'react'
const Lazy=React.lazy(()=>'impot("./Loading")')
const Lazyloading = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}/>
    </div>
  )
}

export default Lazyloading
