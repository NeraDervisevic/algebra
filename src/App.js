import logo from './logo.svg';
import './App.css';
import Chat from './Chat.js';
import { useState } from 'react';

function randomName() {
  const names = ["Nera","Maja","Marko","Luka","Krešo","Nina","Sara","Laura","Ivan"];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function App() {

  const [message, setMessage] = useState([
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
      <Chat message={message} user={user} setMessage={setMessage} setUser={setUser} />
    </div>
  );
}

export default App;
