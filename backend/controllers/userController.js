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

    if (!userExists) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })


    }
    else{
        res.status(400);
        throw new Error("hello looks like you have an account, kindly login")
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

const getUsers = asyncHandler(async(req, res)=> {
    const users = await User.find({})
    console.log("I made it here")
    return res.status(200).json(users)
})

const updateUser = asyncHandler(async(req, res)=> {
    const {name, email, password } = req.body

    const user = await User.findOne({email});
    if (user) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const changed = await User.findByIdAndUpdate(user._id, {
            name: name === '' ? user.name: name, password: password === '' ? user.password : hashedPassword,
        });
        console.log('changed')

        res.status(201).json({
            _id: user.id,
            name,
            email
        })

    } else {
        res.status(404).json({message: "user not found"})
    }
    

    
})

//find a user 

const getSpecificUser = asyncHandler(async(req, res)=> {
    const {email} = req.body

    try{
        const userInfo = await User.find(email)

        return res.status(200).json(userInfo)
    }catch(err){
        console.log(err)
        res.status(404).json(err, {message: "user not found"})
    }



})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
};

module.exports = {
    createUser,
    loginUser,
    getUsers,
    updateUser,
    getSpecificUser
}


