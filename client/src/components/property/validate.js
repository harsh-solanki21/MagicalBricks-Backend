export default function validateInfo(
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
) {
  let errors = {}

  if (!name.trim()) {
    errors.name = 'Name Required'
  }

  if (!email) {
    errors.email = 'Email Required'
  }

  if (multipleFiles.length === 0) {
    errors.images = 'At least one image is Required'
  }

  if (!totalPrice) {
    errors.totalPrice = 'Total Price is Required'
  }

  if (!sqftPrice) {
    errors.sqftPrice = 'sq.ft price is Required'
  }

  if (!bhk) {
    errors.bhk = 'Flat Size is Required'
  }

  if (!carpetArea) {
    errors.carpetArea = 'Carpet Area is Required'
  }

  if (!category) {
    errors.category = 'Category is Required'
  }

  if (!description) {
    errors.description = 'Description is Required'
  }

  if (!location) {
    errors.location = 'Location is Required'
  }

  if (!city) {
    errors.city = 'City is Required'
  }

  if (!state) {
    errors.state = 'State is Required'
  }

  if (!phone) {
    errors.phone = 'Number is Required'
  } else if (phone.length !== 10) {
    errors.phone = 'Invalid Number'
  }
  return errors
}
