import React, { useState } from 'react';
import logo from './logo.svg';
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
    username: randomName(),
    color: randomColor()
  });

  return (
    <div className="App">
      <Chat messages={messages} user={user} />
      <Textbox />
    </div>
  );
}

export default App;