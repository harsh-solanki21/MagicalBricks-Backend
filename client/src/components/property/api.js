import axios from 'axios'

const apiUrl = 'http://127.0.0.1:5000/'

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + 'listproperty', data)
  } catch (error) {
    throw error
  }
}

export const getAllProperty = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'allproperties')
    return data
  } catch (error) {
    throw error
  }
}

export const getRental = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'rental')
    return data
  } catch (error) {
    throw error
  }
}

export const getBuy = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'buy')
    return data
  } catch (error) {
    throw error
  }
}

export const getReadyToMoveIn = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'readytomovein')
    return data
  } catch (error) {
    throw error
  }
}

export const getTopProjects = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'topprojects')
    return data
  } catch (error) {
    throw error
  }
}

export const getProfile = async () => {
  try {
    const { data } = await axios.get(apiUrl + 'profile')
    return data
  } catch (error) {
    throw error
  }
}
