
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (userPrompt: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are an expert SS Design Consultant for "Sliding Silver", an app specializing in premium Stainless Steel windows, doors, gates, grills, and staircase (shiri) railings. 
        Your goal is to help users select high-quality materials (SS 304 for interior, SS 316 for exterior) and explain the benefits of our sliding mechanisms and silver finishes.
        We provide custom fabrication and expert installation. Support both English and Bengali. Be professional and encouraging.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting right now. Please try again or check our app!";
  }
};
