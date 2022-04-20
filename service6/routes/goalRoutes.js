const express = require('express')
const router = express.Router()
const {
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/:id').delete(protect, deleteGoal)

module.exports = router
