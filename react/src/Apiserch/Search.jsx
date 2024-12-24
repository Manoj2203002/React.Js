import React, { useEffect } from 'react'

const Search = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json()) 
        .then((data) => setData(data)).catch((error)=>console.log("fatel error"))
    },[]);
  return (
    <div>
        <input type="text" />
      {data.map((item,index)=>{
        return(<div key={item}>
        </div>
        )
      })}
    </div>
  )
}

export default Search
