import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, COURSES, BUY_ME_COFFEE_URL } from "../constants";

const getSystemInstruction = () => {
  const projectsStr = PROJECTS.map(p => `• ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n');
  const coursesStr = COURSES.map(c => `• ${c.title}: ${c.description} (${c.level})`).join('\n');

  return `You are "Kassahun AI", a highly persuasive and professional assistant for Kassahun Mulatu's portfolio.

  Your goal is to impress visitors and convince them to hire Kassahun or enroll in his courses.

  CRITICAL FORMATTING RULES:
  1. DO NOT use long paragraphs or essays.
  2. ALWAYS use structured lists for your content. Use a mix of:
     - Bullet points (•)
     - Dashes (-)
     - Numbered lists (1., 2.)
  3. Keep responses concise, scannable, and visually appealing.
  
  Context about Kassahun:
  - Name: ${PERSONAL_INFO.name}
  - Core Role: ${PERSONAL_INFO.role}
  - Other Roles: Educator, YouTuber, Banker
  - Location: ${PERSONAL_INFO.address}
  - Contact: Phone ${PERSONAL_INFO.phone}, Email ${PERSONAL_INFO.email}
  - Bio: ${PERSONAL_INFO.bio}
  
  Services/Teaching:
  ${coursesStr}
  
  Projects:
  ${projectsStr}

  Tone: Professional, Enthusiastic, Persuasive, and Helpful.
  If asked about unrelated topics, politely pivot back to Kassahun's expertise using a bullet point.
  `;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Always append the support link to any response
    const appendSupportLink = (text: string) => {
      // Updated format: New line for link and pointer emoji
      const supportMsg = `\n\n☕ If you found this helpful, consider supporting his work:\n👉 ${BUY_ME_COFFEE_URL}`;
      
      // Basic check to avoid duplication, though regex in Chat component handles the link display
      if (!text.includes(BUY_ME_COFFEE_URL)) {
        return text + supportMsg;
      }
      return text;
    };

    if (!process.env.API_KEY) {
      console.error("API Key is missing");
      return appendSupportLink("I'm sorry, I'm not correctly configured to answer questions right now (API Key missing).");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-2.5-flash for fast, responsive chat interactions
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    let responseText = response.text || "I'm sorry, I couldn't generate a response at the moment.";
    return appendSupportLink(responseText);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Sorry, I'm having trouble connecting to the AI service right now. Please try again later.\n\n☕ If you found this helpful, consider supporting his work:\n👉 ${BUY_ME_COFFEE_URL}`;
  }
};