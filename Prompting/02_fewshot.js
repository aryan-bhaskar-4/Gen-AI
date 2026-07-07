import {OpenAI} from "openai";

const client = new OpenAI({
    apikey: process.env[OPENAI_API_KEY],
})

async function main(prompt = ''){
    const result = client.completions.chat.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    })

    console.log(result.choices[0].message.content);
}

main("Tell me what is 2+2? - Also don't add anything else Take Smaples from examples ; Example: User: What is 5+4? Output: 9(Nine) ; User: What is 5+1? Output: 6(Six)")