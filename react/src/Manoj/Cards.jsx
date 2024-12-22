import React from 'react'
import './Cards.scss'
const card = () => {
  return (
    <div className='main'>
        <div className='card'>
          <div className='cardheader'>
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
            <div className='image'>
              <img src="https://imgs.search.brave.com/JgZj1F8G2lplX0RGgJZssH7RT0RQX-jlTkZwVGcOp7A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzQwOS85NTIv/OTIwL2RyYWdvbi1i/YWxsLXotc29uLWdv/a3UtcG9ydHJhaXQt/ZGlzcGxheS13YWxs/cGFwZXItcHJldmll/dy5qcGc" alt="Profile"/>
            </div>         
          <div className='p'>
            <h3>Goku</h3>
            <p>Fighter</p>
          </div>
          <div className='icons'>
          <i className="fa-brands fa-facebook"style={{color:"blue"}}></i>
          <i className="fa-brands fa-twitter"style={{color:"skyblue"}}></i>
          <i className="fa-brands fa-instagram"style={{color:"red"}}></i>
          <i className="fa-brands fa-youtube" style={{color:"red"}}></i>
          </div>
          <div className='display'>
            <button>Message</button>
            <button>Subscribe</button>
          </div>
          <div className='icons2'>
         <i className="fa-regular fa-heart"><span>12.3k</span></i>
          <i className="fa-regular fa-comment"><span>40.3k</span></i>
          <i className="fa-solid fa-share"><span>12.8k</span></i>
          </div>
        </div>
    </div>
  )
}

export default card