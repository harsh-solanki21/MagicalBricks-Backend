const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/UserModel')
const validateRegisterInput = require('../validation/signupValidate')
const validateLoginInput = require('../validation/loginValidate')

// POST api /register
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err))
        })
      })
    }
  })
})

//GET api /profile
router.get('/profile', (req, res) => {
  const email = req.query.email
  // console.log('email', email)
  User.findOne({ email }).then((user) => {
    res.status(200).json(user)
  })
})

// POST api /login
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ email: 'Invalid Email' })
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        }

        // Sign token
        jwt.sign(
          payload,
          'secret',
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            })
          }
        )
      } else {
        return res.status(404).json({ password: 'Incorrect Password' })
      }
    })
  })
})

module.exports = router
