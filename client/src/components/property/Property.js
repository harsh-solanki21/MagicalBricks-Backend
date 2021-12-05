import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { multipleFilesUpload } from './api'
import validate from './validate'

const Form = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [totalPrice, setTotalPrice] = useState('')
  const [sqftPrice, setSqftPrice] = useState('')
  const [bhk, setBhk] = useState('')
  const [carpetArea, setCarpetArea] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [multipleFiles, setMultipleFiles] = useState('')

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(
      validate(
        name,
        email,
        phone,
        totalPrice,
        sqftPrice,
        bhk,
        carpetArea,
        category,
        description,
        location,
        city,
        state,
        multipleFiles
      )
    )

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('totalPrice', totalPrice)
    formData.append('sqftPrice', sqftPrice)
    formData.append('bhk', bhk)
    formData.append('carpetArea', carpetArea)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('location', location)
    formData.append('city', city)
    formData.append('state', state)
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i])
    }
    await multipleFilesUpload(formData)

    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/')
    }
  })

  return (
    <>
      <form encType='multipart-form-data' onSubmit={handleSubmit}>
        <h1>Add Property</h1>
        <div>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <li>{errors.name}</li>}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <li>{errors.email}</li>}
          </div>
          <div>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              placeholder='Phone'
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <li>{errors.phone}</li>}
          </div>
          <div>
            <label htmlFor='images'>Property Images</label>
            <input
              type='file'
              name='images'
              accept='.jpg,.jpeg,.png'
              placeholder='Upload Images'
              onChange={(e) => setMultipleFiles(e.target.files)}
              multiple
            />
            {errors.images && <li>{errors.images}</li>}
          </div>
          <div>
            <label htmlFor='totalPrice'>Total Price</label>
            <input
              type='text'
              name='totalPrice'
              placeholder='Total Price of Property'
              onChange={(e) => setTotalPrice(e.target.value)}
            />
            {errors.totalPrice && <li>{errors.totalPrice}</li>}
          </div>
          <div>
            <label htmlFor='sqftPrice'>Price per sq.ft</label>
            <input
              type='text'
              name='sqftPrice'
              placeholder='Price per sq.ft of property'
              onChange={(e) => setSqftPrice(e.target.value)}
            />
            {errors.sqftPrice && <li>{errors.sqftPrice}</li>}
          </div>
          <div>
            <label htmlFor='bhk'>Flat Size</label>
            <input
              type='number'
              name='bhk'
              placeholder='Enter BHKs'
              onChange={(e) => setBhk(e.target.value)}
            />
            {errors.bhk && <li>{errors.bhk}</li>}
          </div>
          <div>
            <label htmlFor='carpetArea'>Carpet Area</label>
            <input
              type='number'
              name='carpetArea'
              placeholder='Enter Carpet Area'
              onChange={(e) => setCarpetArea(e.target.value)}
            />
            {errors.carpetArea && <li>{errors.carpetArea}</li>}
          </div>
          <div>
            <label htmlFor='category'>Category</label>
            <select
              defaultValue={'DEFAULT'}
              name='category'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='DEFAULT' disabled>
                Select Category
              </option>
              <option value='Rental'>Rental</option>
              <option value='Buy'>Buy</option>
              <option value='Ready to move-in'>Ready to move-in</option>
              <option value='Top Projects'>Top Projects</option>
            </select>
            {errors.category && <li>{errors.category}</li>}
          </div>
          <div>
            <label htmlFor='description'>Descripetion</label>
            <textarea
              name='description'
              rows='5'
              cols='100'
              maxLength='1000'
              placeholder='Enter Description about the property'
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && <li>{errors.description}</li>}
          </div>
          <div>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              placeholder='Street'
              onChange={(e) => setLocation(e.target.value)}
            />
            {errors.location && <li>{errors.location}</li>}
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              placeholder='City'
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <li>{errors.city}</li>}
          </div>
          <div>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              name='state'
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
            />
            {errors.state && <li>{errors.state}</li>}
          </div>
          <div>
            <input type='submit' value='Submit' onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
