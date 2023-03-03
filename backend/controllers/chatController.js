const asyncHandler = require('express-async-handler')
const Chat = require('../model/chatModel')
const User = require('../model/userModel')

const createChat = asyncHandler(async(req, res)=> {
    const body  = {
        user: req.params.id,
        date: req.params.date,
    }
//hello
    const chat = await Chat.create(body);
    console.log("new chat created", chat)

    return res.status(201).json(chat)

});

const updateChat = asyncHandler(async(req, res) => {
    // const updates = {
    //     message: req.body.message
    // }
    

    const newChat = await Chat.findOneAndUpdate({date: req.params.date}, {$push:{messages:{chat1: req.body.text}}}, {new: true, upsert:true})
    return res.status(200).json(newChat)
});

const getUserChats = asyncHandler(async(req, res)=>{
    console.log(req)
    const user = await User.findById(req.user.id);

    const chat = await Chat.find({user: req.params.id})
    console.log(user)
    if
    (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    if (req.user.id !== req.params.id){
        res.status(401)
        throw new Error('unauthorized')
    }

    res.status(200).json(chat);
});

const getUserChatDate = asyncHandler(async (req, res)=>{

   try {
    console.log(req)
    const chat = await Chat.findOne({
        user: req.params.id,
        date: req.params.date,
    })

    console.log(chat)

   let toLog = chat ? chat: 'chat was not found'

//    if (toLog == 'chat was not found'){
//     res.status(401)
//     throw new Error(toLog)
//    }
  

    res.status(200).json(toLog);

   }catch(err){
    console.log(err)
   }
});
module.exports = {
    createChat,
    getUserChatDate,
    //deleteChat,
    updateChat,
    getUserChats,
}