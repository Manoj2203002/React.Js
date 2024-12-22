import React, { useState } from 'react'
import './Image.scss'

const images = () => {
    const image=["https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_640.jpg"
        ,"https://cdn.pixabay.com/photo/2023/09/19/12/59/eagle-8262555_640.jpg",
        "https://cdn.pixabay.com/photo/2016/01/20/13/28/woman-1151562_640.jpg"];
    const [Image,setimage]=useState(0) 
    const manoj=()=>{
        setimage((Image+1)%image.length);
    };
    const gayathri=()=>{
        setimage((Image-1)%image.length);
    }
  return (
    <div>
        <div>
            <img src={image[Image]} alt="" />
            <button onClick={manoj}>next</button>
            <button onClick={gayathri}>prvious</button>
        </div>
    </div>
  )
}

export default images