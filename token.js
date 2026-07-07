import { get_encoding } from "tiktoken";

const encoder = get_encoding("gpt2");

const tokens = await encoder.encode("Hello, My name is Aryan Chaudhary")

console.log(tokens);

const decoded =  new TextDecoder().decode(encoder.decode(tokens));
console.log(decoded)