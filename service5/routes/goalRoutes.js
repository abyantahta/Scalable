const express = require('express')
const router = express.Router()
const {
  getGoals,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals)

module.exports = router
