import { openai } from '../config/config_openai';
const asyncHandler = require('express-async-handler')

export const createAffirmation = asyncHandler(async(req, res)=> {
    try {
        const {text, activeChatId} = req.body;
        console.log('text', text);
        res.status(200).json({text})

    }catch(error) {
        console.error("error", error);
        res.status(500).json({error: error.message})
    }
})