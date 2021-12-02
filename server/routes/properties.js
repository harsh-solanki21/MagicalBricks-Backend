const express = require('express')
const router = express.Router()
const { upload } = require('../config/propHelper')
const { multipleFileUpload } = require('../controllers/propController')

router.post('/listproperty', upload.array('files'), multipleFileUpload)

module.exports = {
  routes: router,
}
