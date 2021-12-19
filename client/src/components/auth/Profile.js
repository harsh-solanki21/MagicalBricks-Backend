import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProfile } from '../property/api'

const Profile = () => {
  // const [profile, setProfile] = useState([])
  // useEffect(async () => {
  //   const email = localStorage.getItem('UserId')
  //   const rep = await axios.get('http://127.0.0.1:5000/profile', {
  //     params: {
  //       email,
  //     },
  //   })
  //   // console.log(rep)
  //   setProfile(rep?.data)
  // }, [])

  const [multipleFiles, setMultipleFiles] = useState([])

  const getProfiles = async () => {
    try {
      const fileslist = await getProfile()
      setMultipleFiles(fileslist)
    } catch (error) {
      console.log(error)
    }
  }
  const localEmail = localStorage.getItem('UserId')
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <>
      <h1>Home</h1>
      {multipleFiles
        .filter((item) => item.email === `${localEmail}`)
        .map((data) => (
          <div key={data._id}>
            <h5>{data.name}</h5>
            <h5>{data.email}</h5>
            <h5>{data.phone}</h5>
            <h5>{data.totalPrice}</h5>
            <h5>{data.sqftPrice}</h5>
            <h5>{data.bhk}</h5>
            <h5>{data.carpetArea}</h5>
            <h5>{data.category}</h5>
            <h5>{data.description}</h5>
            <h5>{data.location}</h5>
            <h5>{data.city}</h5>
            <h5>{data.state}</h5>
            <div>
              {data.files.map((file) => (
                <div>
                  <div>
                    <img
                      src={`http://127.0.0.1:5000/${file.filePath}`}
                      width='300'
                      height='200'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </div>
            <input
              type='button'
              value='Delete'
              onClick={() => {
                axios.delete(`http://127.0.0.1:5000/profile/${data._id}`)
              }}
            />
          </div>
        ))}
    </>
  )
}

export default Profile
