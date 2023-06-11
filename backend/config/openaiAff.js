const {Configuration, OpenAIApi} = require('openai')

// configure open AI  API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openaiClient =  new OpenAIApi(configuration);

module.exports = openaiClient

