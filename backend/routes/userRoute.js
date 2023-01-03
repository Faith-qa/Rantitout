const express = require('express')
const router = express.Router();
const {
    createUser,
    loginUser,
    getUsers,
    updateUser,
    getSpecificUser
} = require('../controllers/userController');

const {protect} = require('../middleware/authMiddleware')
const upload = require('../middleware/upload')
const {uploadToCloudinary, removeFromCloudinary} = require('../config/cloudinary')
router 
        .route('/')
        .post(createUser)
        .get(protect, getUsers)
        .put(updateUser)
router.get('/:email', getSpecificUser)



router.post('/login', loginUser)
router.post('/image', upload.single("userImage"), async(req, res)=>{
    console.log(req.file)
    const data = await uploadToCloudinary(req.file.path, "userImage")
    console.log(data)
    res.status(200).json(data)
})

module.exports = router;