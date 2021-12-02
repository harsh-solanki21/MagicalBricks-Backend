import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { useNavigate, NavLink } from 'react-router-dom'
import './style.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()

    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password2,
      }),
    })
    if (response?.status === 200) {
      navigate('/')
    } else {
      const data = await response.json()
      setErrors({
        ...errors,
        name: data.name,
        email: data.email,
        password: data.password,
        password2: data.password2,
      })
    }
    // console.log(data)
  }

  return (
    <div>
      <form className='container' onSubmit={handleRegister} noValidate>
        <img src={logo} className='logo' alt='magicalbricks' />
        <h4>
          Buy your <label className='subtitle'>DREAM</label> Property
        </h4>
        <div className='form'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='field-long'
              placeholder='Name'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <li>{errors.name}</li>}
          </div>
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
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              className='field-long'
              placeholder='Retype Password'
              value={password2}
              name='password2'
              onChange={(e) => setPassword2(e.target.value)}
            />
            {errors.password2 && <li>{errors.password2}</li>}
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
          <div className='last'>
            Already Have an account? &nbsp;
            <NavLink to='/login'>{'Log In'}</NavLink>
          </div>
          <br />
        </div>
      </form>
    </div>
  )
}

export default Register
