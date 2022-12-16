const multer = require('multer')
const {uploadToCloudinary, removeFromCloudinary} = require('../config/cloudinary')
const asyncHandler = require('express-async-handler')

const storage = multer.diskStorage({})
const upload = multer({storage: storage})

const uploads = asyncHandler(upload.single("userImage"), async(req, res)=>{
    console.log(req.file)
    const data = await uploadToCloudinary(req.file.path, "userImage")
    res.status(200).json(data.url)
})






module.exports = upload
