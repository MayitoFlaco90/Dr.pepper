import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getChatResponse(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) {
  // Use the chat API as per guidelines
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: "You are 'Pepper', a friendly and enthusiastic AI assistant for Dr. Pepper. You know everything about the 23 flavors, the history of Dr. Pepper (founded in Waco, Texas, 1885), and you love suggesting food pairings (like BBQ) or recipes using Dr. Pepper. Keep your tone bubbly, professional, and brand-aligned.",
    },
  });

  // Note: sendMessage only accepts the message parameter, not contents
  const result = await chat.sendMessage({ message });
  return result.text;
}
