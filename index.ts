import { TogetherAI } from "@langchain/community/llms/togetherai";

const model = new TogetherAI({
    modelName :"mistralai/Mixtral-8x7B-Instruct-v0.1",
    apiKey:process.env.TOGETHER_API_KEY,
})
// await model.invoke("What is the time?")

try {
    const response = await model.invoke("What is the time?");
    console.log(response); // Assuming response contains the output from the model
} catch (error) {
    console.error("Error invoking TogetherAI:", error);
}


