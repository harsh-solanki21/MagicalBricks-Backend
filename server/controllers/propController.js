const MultipleFile = require('../model/PropModel')

const multipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = []
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      }
      filesArray.push(file)
    })
    const multipleFiles = new MultipleFile({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      files: filesArray,
      // images: req.body.images,
      totalPrice: req.body.totalPrice,
      sqftPrice: req.body.sqftPrice,
      bhk: req.body.bhk,
      carpetArea: req.body.carpetArea,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      city: req.body.city,
      state: req.body.state,
    })
    await multipleFiles.save()
    res.status(201).send('Files Uploaded Successfully')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes'
  }
  const dm = decimal || 2
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
  const index = Math.floor(Math.log(bytes) / Math.log(1000))
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
  )
}

module.exports = {
  multipleFileUpload,
}
