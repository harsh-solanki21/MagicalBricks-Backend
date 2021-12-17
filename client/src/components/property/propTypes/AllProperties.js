import React, { useState, useEffect } from 'react'
import { getAllProperty } from '../api'

const AllProperties = () => {
  const [multipleFiles, setMultipleFiles] = useState([])

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getAllProperty()
      setMultipleFiles(fileslist)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMultipleFilesList()
  }, [])

  return (
    <div>
      <h4>All Properties Data</h4>
      {multipleFiles.map((data) => (
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
        </div>
      ))}
    </div>
  )
}

export default AllProperties
