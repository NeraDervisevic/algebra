import React from 'react';

const Chat = ({ messages, user }) => {
  const renderChat = (message) => {
    const { user: messageUser, text } = message;
    const { username } = messageUser;
    const messageFromMe = user.username === username;
    const className = messageFromMe
      ? 'Messages-message activeUser'
      : 'Messages-message';
    return (
      <div className={className}>
        <div className="Message-content">
          <div className="username">{username}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
  };

  return (
    <ul className="Chat-list">
      {messages.map((message, index) => (
        <li key={index}>{renderChat(message)}</li>
      ))}
    </ul>
  );
};

export default Chat;
