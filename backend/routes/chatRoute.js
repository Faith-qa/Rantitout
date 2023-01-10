const express = require('express')
const router = express.Router();

const {
    createChat,
    //deleteChat,
    updateChat,
    getUserChats,
    getUserChatDate

} = require('../controllers/chatController')

const {protect} = require('../middleware/authMiddleware')

//router.route('/').get(protect, )

router
.route('/:id/:date')
.get(protect, getUserChatDate)
.post(protect, createChat)
.put(protect, updateChat)

router.get('/:id', protect, getUserChats)

module.exports = router;