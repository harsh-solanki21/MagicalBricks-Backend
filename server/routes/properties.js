const express = require('express')
const router = express.Router()
const PropData = require('../model/PropModel')
const { upload } = require('../config/propHelper')
const { multipleFileUpload } = require('../controllers/propController')

router.post('/listproperty', upload.array('files'), multipleFileUpload)

router.get('/propdata', async (req, res) => {
  try {
    const users = await PropData.find({ name: req.params.name })
    res.json(users)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = {
  routes: router,
}
