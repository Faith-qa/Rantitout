const openaiClient = require('../config/openaiAff')
const asyncHandler = require('express-async-handler')

const generateAffirmations = asyncHandler(async(req, res)=>{
    try{
        const {mood} = req.body;
        
        const prompt = `provide me with 3 affirmations based on my mood for the day. My mood is ${mood} `;

        const options = {
            model: "gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 30,
            messages: [{"role": "user", "content": prompt}],
            
        };

        const response = await openaiClient.createChatCompletion(options)
        console.log(response.data.choices[0].message)

        const affirmations = response.data.choices[0].message.content
        res.status(200).json({affirmations});

    }catch(error){
        console.error( 'Error:', error);
        console.log("this is the error",error)
        res.status(500).json({error: error})
    }
} )

module.exports = {
    generateAffirmations

}