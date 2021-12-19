import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [profile, setProfile] = useState([])
  useEffect(async () => {
    const email = localStorage.getItem('UserId')
    const rep = await axios.get('http://127.0.0.1:5000/profile', {
      params: {
        email,
      },
    })
    // console.log(rep)
    setProfile(rep?.data)
  }, [])

  return (
    <>
      <h1>Profile</h1>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </>
  )
}

export default Profile
