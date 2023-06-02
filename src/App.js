import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Chat from './Chat';
import Textbox from './Textbox';

function randomName() {
  const names = ["Nera", "Maja", "Marko", "Luka", "Krešo", "Nina", "Sara", "Laura", "Ivan"];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

const App = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    username: randomName() || "Default User",
    color: randomColor() || "#000000"
  });
  const [droneInstance, setDroneInstance] = useState(null);
  const listElementRef = useRef(null);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      text: messageText,
      user: user
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Send the message through Scaledrone
    if (droneInstance) {
      droneInstance.publish({
        room: 'Web Chat Application',
        message: {
          text: messageText,
          user: user
        }
      });
    }
  };

  const handleSetUserColor = (newColor) => {
    setUser({ ...user, color: newColor });
  };

  useEffect(() => {
    const drone = new window.Scaledrone('JCruZRbwqSCyv5Om');
    setDroneInstance(drone);

    drone.on('open', error => {
      if (error) {
        console.error(error);
      } else {
        const channel = drone.subscribe('Web Chat Application');

        channel.on('data', (message) => {
          // Check if the message is from the current user
          if (message.user.username !== user.username) {
            const newMessage = {
              text: message.text,
              user: message.user
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);
          }
        });
      }
    });

    return () => {
      drone.close();
    };
  }, [user.username]);

  useEffect(() => {
    if (listElementRef.current && messages.length > 0) {
      listElementRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  return (
    <div className="App">
      <Chat messages={messages} user={user} listElementRef={listElementRef} />
      <Textbox onSendMessage={handleSendMessage} onSetUserColor={handleSetUserColor} />
    </div>
  );
};

export default App;
