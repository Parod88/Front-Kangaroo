import React from 'react';
import './ChatUsersOnline.scss';

function ChatUsersOnline() {
  return (
    <div id="chat-users-online">
      <div className="avatar">
        <img src="https://i.pravatar.cc/500" alt="" />
        <div className="user-badge" />
      </div>
      <div>UserName</div>
    </div>
  );
}

export default ChatUsersOnline;
