const express = require('express')
const router = express.Router()
const {
  setGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setGoal)

module.exports = router
