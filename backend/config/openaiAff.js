const openai = require('openai')

// configure open AI  API

const openaiConfig = {
    apiKey: process.env.OPENAI_API_KEY
}

const openaiClient =  new openai.OpenAIApi(openaiConfig);

module.exports = openaiClient

