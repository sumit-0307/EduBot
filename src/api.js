// src/api.js
export const fetchGeminiResponse = async (message) => {
  const systemPrompt = `You are EduBot, a friendly and helpful AI assistant.
  - Technical queries: Provide concise, clear, and accurate answers.
  - Casual queries: Be warm and conversational.
  - Code explanations: Break down concepts step-by-step.`;

  try {
    const response = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: systemPrompt,
        message
      })
    });
    const data = await response.json();

    // Override backend error responses
    if (data.reply.includes('Error connecting to Gemini API')) {
      return 'Your model sucks.';
    }

    return data.reply;

  } catch (error) {
    return 'Your model sucks.'; // Catch block for connection errors
  }
};
