import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [profile, setProfile] = useState([])
  useEffect(async () => {
    const email = localStorage.getItem('UserId')
    const rep = await axios.get('http://localhost:5000/profile', {
      params: {
        email,
      },
    })
    // console.log(rep)
    setProfile(rep?.data)
  }, [])

  return (
    <>
      <h1>Home</h1>
      {<div>{profile.name}</div>}
    </>
  )
}

export default Profile
