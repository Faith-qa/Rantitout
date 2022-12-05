const express = require('express')
const router = express.Router();
const {
    createUser,
    loginUser,
    getUsers
} = require('../controllers/userController');

const {protect} = require('../middleware/authMiddleware')

router 
        .route('/')
        .post(createUser)
        .get(getUsers)

router.post('/login', loginUser)

module.exports = router;