import React from 'react';

const Chat = ({ message }) => {
    return (
        <ul className='Chat-list'>
            {message.map(m => renderChat(m))}
        </ul>
        );
};

function renderChat(message) {
    const {user, text} = message;
    const {activeUser} = user.props;
    const messageFromMe = user.id === activeUser.id;
    const className = messageFromMe ?
      "Messages-message activeUser" : "Messages-message";
    return (
      <li className={className}>
        <span
          className="avatar"
          style={{backgroundColor: user.clientData.color}}
        />
        <div className="Message-content">
          <div className="username">
            {user.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
};

export default Chat;