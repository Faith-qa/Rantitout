/* open ai configurationS */
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-EnKYsvtgtLSl3QVnAa1Sa2Di",
    apiKey: process.env.OPENAI_API_KEY
});

export const openai = new OpenAIApi(configuration);
// const response = await openai.createChatCompletion(
//     {
//         model: "gpt-3.5-turbo",
//         messages: [
//             {"role": "system", "content":"you are a helpful assistant"},
//             {"role": "user", "content": "Who won the world series in 2020?"},
//             {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//             {"role": "user", "content": "Where was it played?"}
//         ]

//     }
// )