import React from 'react';
import Button from '../../../components/Button/Button';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ChatPage.scss';
import ChatUsersOnline from './ChatUsersOnline/ChatUsersOnline';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';

function ChatPage() {
  return (
    <div id="chat-page">
      <LayoutAccount
        title={'Messages'}
        subtitle={'Lorem ipsum dolor sit amet, consectetur'}
        background={false}
      >
        <div className="chat-container">
          {/*Menu */}
          <div className="chat-col-menu">
            <div className="input-item">
              <input
                className="input"
                type="text"
                id="search"
                placeholder="Enter user name"
              ></input>
            </div>
            <div className="chat-col-menu-box">
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>

          {/*Box */}
          <div className="chat-col-messages">
            <div className="chat-col-messages-box">
              <div className="chat-box-top">
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message own={true} />
                <Message />
                <Message own={true} />
              </div>
              <div className="chat-box-bottom">
                <div className="input-item">
                  <textarea
                    className="input "
                    type="text"
                    id="message"
                    placeholder="Write your message..."
                    col="30"
                  ></textarea>
                </div>
                <div>
                  <Button secondary>Send</Button>
                </div>
              </div>
            </div>
          </div>

          {/*Chat */}
          <div className="chat-col-users-online">
            <ChatUsersOnline />
            <ChatUsersOnline />
            <ChatUsersOnline />
            <ChatUsersOnline />
          </div>
        </div>
      </LayoutAccount>
    </div>
  );
}

export default ChatPage;
