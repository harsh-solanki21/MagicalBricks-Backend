import axios from 'axios'

const apiUrl = 'http://127.0.0.1:5000/'

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + 'listproperty', data)
  } catch (error) {
    throw error
  }
}
