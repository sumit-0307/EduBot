// src/App.js
import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import InputBox from './components/InputBox';
import { fetchGeminiResponse } from './api';
import AuroraBackground from './components/AuroraBackground';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages([...messages, { sender: 'You', text: message }]);
    const reply = await fetchGeminiResponse(message);
    setMessages([...messages, { sender: 'You', text: message }, { sender: 'EduBot', text: reply }]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <AuroraBackground intensity={1.2} speed={5} blur={20} opacity={0.8} />
      <h1 className="text-3xl font-bold mb-6 text-blue-300 drop-shadow-lg">EduBot</h1>
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-6 rounded-lg w-[1000px] h-[550px] shadow-2xl border border-blue-400">
        <ChatBox messages={messages} />
        <InputBox onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default App;
