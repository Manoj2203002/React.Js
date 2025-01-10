import React from 'react'

const Child = ({problem}) => {
    console.log("Iam a Child Components")
  return (
    <div>
      Child
    </div>
  )
}

export default React.memo(Child);
