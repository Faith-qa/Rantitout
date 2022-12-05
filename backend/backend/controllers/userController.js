const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')



const createUser = asyncHandler(async (req, res)=> {
    const {name, email, password} = req.body;

    console.log(req)

    if (!name||!email||!password) {
        res.status(404);

        throw new Error('hi you did not make it')
    }
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(201).json({
            _id: userExists.id,
            name: userExists,name,
            email: userExists.email,
            token: generateToken(userExists._id),
        });

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }

})


const loginUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }else {
        res.status(400);
        throw new Error('invalid credentials')
       }
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
};

const getUsers = asyncHandler(async(req, res)=> {
    const users = await User.find({})
    console.log("I made it here")
    return res.status(200).json(users)
})


module.exports = {
    createUser,
    loginUser,
    getUsers,
}


