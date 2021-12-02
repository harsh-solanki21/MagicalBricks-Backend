export default function validateInfo(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name Required'
  }

  if (!values.email) {
    errors.email = 'Email Required'
  }

  if (!values.images) {
    errors.images = 'Atleast one image is required'
  }

  if (!values.totalPrice) {
    errors.totalPrice = 'Total Price is Required'
  }

  if (!values.sqftPrice) {
    errors.sqftPrice = 'sq.ft price is Required'
  }

  if (!values.bhk) {
    errors.bhk = 'Flat Size is Required'
  }

  if (!values.carpetArea) {
    errors.carpetArea = 'Carpet Area is Required'
  }

  if (!values.category) {
    errors.category = 'Category is Required'
  }

  if (!values.description) {
    errors.description = 'Description is Required'
  }

  if (!values.location) {
    errors.location = 'Location is Required'
  }

  if (!values.city) {
    errors.city = 'City is Required'
  }

  if (!values.state) {
    errors.state = 'State is Required'
  }

  if (!values.phone) {
    errors.phone = 'Number is Required'
  } else if (values.phone.length !== 10) {
    errors.phone = 'Invalid Number'
  }
  return errors
}
