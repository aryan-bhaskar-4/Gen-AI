import {OpenAI} from "openai";

const client = new OpenAI({
    apiKey: process.env[OPENAI_API_KEY],
})

async function main(prompt = '') {
    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt,
            }
        ]
    })

    console.log(response.choices[0].message.content);
}

main("Hello, How are you?")