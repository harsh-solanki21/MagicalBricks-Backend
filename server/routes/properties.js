const express = require('express')
const router = express.Router()
const { upload } = require('../config/propHelper')
const {
  multipleFileUpload,
  getAllProperty,
  getRental,
  getBuy,
  getReadyToMoveIn,
  getTopProjects,
} = require('../controllers/propController')

router.post('/listproperty', upload.array('files'), multipleFileUpload)
router.get('/allproperties', getAllProperty)
router.get('/rental', getRental)
router.get('/buy', getBuy)
router.get('/readytomovein', getReadyToMoveIn)
router.get('/topprojects', getTopProjects)

module.exports = {
  routes: router,
}
