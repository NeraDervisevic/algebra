import React, { useState, useEffect } from 'react';
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
      text: "Hey",
      user: {
        color: randomColor(),
        username: "Anonymous"
      }
    }
  ]);

  const [user, setUser] = useState({
    username: randomName() || "Default User",
    color: randomColor() || "#000000"
  });

  const [droneChannel, setDroneChannel] = useState(null);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const droneInstance = new window.Scaledrone('JCruZRbwqSCyv5Om');
    setDrone(droneInstance);

    droneInstance.on('open', error => {
      if (error) {
        console.error(error);
      } else {
        const channel = droneInstance.subscribe('Web Chat Application');
        setDroneChannel(channel);

        channel.on('data', (message) => {
          const newMessage = {
            text: message,
            user: {
              color: randomColor(),
              username: "Anonymous"
            }
          };

          setMessages(prevMessages => [...prevMessages, newMessage]);
        });
      }
    });

    return () => {
      droneInstance.close();
    };
  }, []);

  const handleSendMessage = (messageText) => {
    if (drone) {
      drone.publish({
        room: 'Web Chat Application',
        message: messageText
      });
    }
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
