import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { multipleFilesUpload } from './api'
import validate from './validate'

const Form = (props) => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    images: '',
    totalPrice: '',
    sqftPrice: '',
    bhk: '',
    carpetArea: '',
    category: '',
    description: '',
    location: '',
    city: '',
    state: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  // const UploadMultipleFiles = async () => {
  //   const formData = new FormData()
  //   formData.append('name', name)
  //   formData.append('email', email)
  //   formData.append('phone', phone)
  //   formData.append('totalPrice', totalPrice)
  //   formData.append('sqftPrice', sqftPrice)
  //   formData.append('bhk', bhk)
  //   formData.append('carpetArea', carpetArea)
  //   formData.append('category', category)
  //   formData.append('description', description)
  //   formData.append('location', location)
  //   formData.append('city', city)
  //   formData.append('state', state)
  //   for (let i = 0; i < multipleFiles.length; i++) {
  //     formData.append('images', multipleFiles[i])
  //   }
  //   await multipleFilesUpload(formData, mulitpleFileOptions)
  //   props.getMultiple()
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('values', values) // problem might be here
    for (let i = 0; i < values.length; i++) {
      formData.append('images', values[i])
    }
    await multipleFilesUpload(formData)
    props.getMultiple()
  }

  useEffect(() => {
    console.log(Object.keys(errors).length)
    console.log(isSubmitting)
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
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <li>{errors.name}</li>}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <li>{errors.email}</li>}
          </div>
          <div>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              placeholder='Phone'
              value={values.phone}
              onChange={handleChange}
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
              value={values.images}
              onChange={handleChange}
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
              value={values.totalPrice}
              onChange={handleChange}
            />
            {errors.totalPrice && <li>{errors.totalPrice}</li>}
          </div>
          <div>
            <label htmlFor='sqftPrice'>Price per sq.ft</label>
            <input
              type='text'
              name='sqftPrice'
              placeholder='Price per sq.ft of property'
              value={values.sqftPrice}
              onChange={handleChange}
            />
            {errors.sqftPrice && <li>{errors.sqftPrice}</li>}
          </div>
          <div>
            <label htmlFor='bhk'>Flat Size</label>
            <input
              type='number'
              name='bhk'
              placeholder='Enter BHKs'
              value={values.bhk}
              onChange={handleChange}
            />
            {errors.bhk && <li>{errors.bhk}</li>}
          </div>
          <div>
            <label htmlFor='name'>Carpet Area</label>
            <input
              type='number'
              name='carpetArea'
              placeholder='Enter Carpet Area'
              value={values.carpetArea}
              onChange={handleChange}
            />
            {errors.carpetArea && <li>{errors.carpetArea}</li>}
          </div>
          <div>
            <label htmlFor='category'>Category</label>
            <select
              defaultValue={'DEFAULT'}
              name='category'
              onChange={handleChange}
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
              value={values.description}
              onChange={handleChange}
            >
              A nice day is a nice day. Lao Tseu
            </textarea>
            {errors.description && <li>{errors.description}</li>}
          </div>
          <div>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              placeholder='Street'
              value={values.location}
              onChange={handleChange}
            />
            {errors.location && <li>{errors.location}</li>}
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              placeholder='City'
              value={values.city}
              onChange={handleChange}
            />
            {errors.city && <li>{errors.city}</li>}
          </div>
          <div>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              name='state'
              placeholder='State'
              value={values.state}
              onChange={handleChange}
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
