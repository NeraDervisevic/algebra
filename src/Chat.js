import React from 'react';

const Chat = ({ messages, user, listElementRef }) => {
  return (
    <ul className="Chat-list" ref={listElementRef}>
      {messages.map((message, index) => {
        const { user: messageUser, text } = message;
        const { username } = messageUser;
        const messageFromMe = user.username === username;
        const className = messageFromMe
          ? 'Messages-message activeUser'
          : 'Messages-message';
        return (
          <li key={index} className={className}>
            <div className="Message-content">
              <div className="username">{username}</div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Chat;
