const express = require('express')
const router = express.Router();

const {
    createChat,
    deleteChat,
    updateChat,
    getAChatonDate

} = require('../controllers/chatController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getAllPlans)

router
.route('/:id/:date')
.get(protect, getAChatonDate)
.post(protect, createChat)
.put(protect, updateChat)

module.exports = router;