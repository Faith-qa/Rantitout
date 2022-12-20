const asyncHandler = require('express-async-handler')
const Chat = require('../model/chatModel')

const createChat = asyncHandler(async(req, res)=> {
    const {
        date,
        message
    } = req.body

    const chat = await Chat.create(req.body);

    return res.status(201).json(chat)

});

const updateChat = asyncHandler(async(req, res) => {
    const updates = req.body

    const newChat = await Chat.findOne({date: req.body.date}, updates, {new: true, upsert:true})
    return res.status(200).json(newChat)
});

const deleteChat = asyncHandler(async(req, res)=> {
    const deleteAchat = await Chat.findOneAndDelete({date: req.params.date})

    return res.status(200).json({message: `deleted chat for ${req.params.date}`})
});

const getAChatonDate = asyncHandler(async(req, res)=> {
    try{
        const chat = await Chat.findOne({user: req.params.id, date: req.params.date})
        return res.status(200).json(chat)
    }catch(err){
        res.status(400).json({message: "chat not found"})}


})


module.exports = {
    createChat,
    deleteChat,
    updateChat,
    getAChatonDate
}