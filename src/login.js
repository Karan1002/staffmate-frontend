import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      <form className='form'>
        <div className='content'>
        <h3 className='title'>Login</h3>
        <div className='elements'>
            <label>Email</label>
            <input type='email' placeholder='Enter email'/>
        </div>
        <div className='elements'>
            <label>Password</label>
            <input type='password' placeholder='Enter password'/>
        </div>
        <div >
            <button type='submit'>Submit</button>
        </div>
        <p className='forgot-password'>Forgot <a href='#'>password?
        </a></p>
        </div>
        </form> 
        <div>
            <button>
                Add
            </button>
        </div>
    </div>
  )
}

export default Login
