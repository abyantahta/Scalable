const express = require('express')
const router = express.Router()
const {
  loginUser,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/login', loginUser)

module.exports = router
