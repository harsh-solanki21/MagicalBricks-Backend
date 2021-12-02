import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { useNavigate, NavLink } from 'react-router-dom'
import './style.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (response?.status === 200) {
      localStorage.setItem('UserId', email)
      // localStorage.setItem('accessToken', e.data.accessToken)
      navigate('/')
    } else {
      const data = await response.json()
      setErrors({
        ...errors,
        email: data.email,
        password: data.password,
      })
    }
    // console.log(data)
  }

  return (
    <div>
      <form className='container' onSubmit={handleLogin} noValidate>
        <img src={logo} className='logo' alt='magicalbricks' />
        <h4>
          Buy your <label className='subtitle'>DREAM</label> Property
        </h4>
        <div className='form'>
          {/* {errors.email && <li>{errors.email}</li>} */}
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='field-long'
              placeholder='Email'
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <li>{errors.email}</li>}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='field-long'
              placeholder='Password'
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <li>{errors.password}</li>}
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
          <div className='last'>
            New to Magicalbricks? &nbsp;
            <NavLink to='/register'>{'Register'}</NavLink>
            &nbsp;here
          </div>
          <br />
        </div>
      </form>
    </div>
  )
}

export default Login
