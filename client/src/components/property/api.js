import axios from 'axios'

const apiUrl = 'http://localhost:5000/'

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + 'listproperty', data)
  } catch (error) {
    throw error
  }
}
