// src/components/ChatBox.js
import React from 'react';

const ChatBox = ({ messages }) => (
  <div className="flex flex-col h-96 overflow-y-auto bg-gray-900 rounded-lg p-4 text-white">
    {messages.map((msg, index) => (
      <div key={index} className="mb-2">
        <strong className={msg.sender === 'You' ? 'text-cyan-400' : 'text-purple-400'}>
          {msg.sender}:
        </strong>{" "}
        {msg.text.split('\n').map((line, i) => (
          <div key={i} className={i === 0 ? "inline" : ""}>
            {line}
            {i < msg.text.split('\n').length - 1 && <br />}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default ChatBox;
