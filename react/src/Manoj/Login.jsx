import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
        <section className='Form'>
            <form action="">
                <h1>Login</h1>
                <input type="text" placeholder='Enter User Name'/>
                <br />
                <input type="email" name="" id="" placeholder='Enter Email' />
                <br/>
                <input type="password" name="" id="" placeholder='Enter the Password'/>
                <br />
                <button>Login</button>
            </form>
        </section>
    </div>
  )
}

export default Login