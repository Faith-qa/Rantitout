const express = require('express')
const router = express.Router();
const {
    createUser,
    loginUser,
    getUsers,
    updateUser
} = require('../controllers/userController');

const {protect} = require('../middleware/authMiddleware')

router 
        .route('/')
        .post(createUser)
        .get(getUsers)
        .put(updateUser)

router.post('/login', loginUser)

module.exports = router;