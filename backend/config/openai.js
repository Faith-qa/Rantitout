const {openai} = require('openai-node')

// configure open AI  API

const openaiConfig = {
    apiKey: process.env.OPENAI_API_KEY
}

export const openaiClient = new openai(openaiConfig);