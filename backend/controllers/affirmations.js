import { openaiClient } from '../config/openai';

const asyncHandler = require('express-async-handler')

const generateAffirmations = asyncHandler(async(req, res)=>{
    try{
        const {mood} = req.body;
        
        const prompt = `As an AI language model, I'm here to provide you with affirmations based on your mood for the day. Your mood is ${mood}. Affirmation 1: `;

        const options = {
            temperature: 0.7,
            max_token: 50,
            prompt: prompt,
            n: 3,
        };

        const response = await openaiClient.completions.create(options)

        const affirmations = response.choices.map(choice => choice.text.trim());

        res.status(200).json({affirmations});

    }catch(error){
        console.error( 'Error:', error);
        res.status(500).json({error: 'Internal server Error'})
    }
} )

module.exports = {
    generateAffirmations

}