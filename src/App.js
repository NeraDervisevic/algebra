import React, { useState } from 'react';
import './App.css';
import Chat from './Chat.js';
import Textbox from "./Textbox.js";

function randomName() {
  const names = ["Nera", "Maja", "Marko", "Luka", "Krešo", "Nina", "Sara", "Laura", "Ivan"];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function App() {
  const [messages, setMessages] = useState([
    {
      text: "This is a test message!",
      user: {
        color: "blue",
        username: "bluemoon"
      }
    }
  ]);

  const [user, setUser] = useState({
    username: randomName() || "Default User",
    color: randomColor() || "#000000"
  });

  const handleSendMessage = (messageText) => {
    const newMessage = {
      text: messageText,
      user: user
    };

    setMessages([...messages, newMessage]);
  };

  const handleSetUserColor = (newColor) => {
    setUser({ ...user, color: newColor });
  };

  return (
    <div className="App">
      <Chat messages={messages} user={user} />
      <Textbox onSendMessage={handleSendMessage} onSetUserColor={handleSetUserColor} />
    </div>
  );
}

export default App;
