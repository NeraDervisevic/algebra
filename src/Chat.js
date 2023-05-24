import React from 'react';

const Chat = ({ messages }) => {
  return (
    <ul className='Chat-list'>
      {messages.map((message, index) => (
        <li key={index}>
          {renderChat(message)}
        </li>
      ))}
    </ul>
  );
};

function renderChat(message) {
  const { user, text } = message;
  const { color, username } = user;
  const messageFromMe = user.username === "bluemoon";
  const className = messageFromMe ? "Messages-message activeUser" : "Messages-message";
  return (
    <div className={className}>
      <span className="avatar" style={{ backgroundColor: color }} />
      <div className="Message-content">
        <div className="username">
          {username}
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Chat;