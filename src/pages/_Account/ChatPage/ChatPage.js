import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ChatPage.scss';
import ChatUsersOnline from './ChatUsersOnline/ChatUsersOnline';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';

function ChatPage() {
  //TODO: User data mock simulate login. Implemento with redux and finaly authentication

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef();
  const user = {
    _id: '621bf293e5330d28f939097b',
    name: 'WallacloneAdmin',
    email: 'admin@wallaclone.com',
    password: '$2a$10$LVlsiH6CmLa77LddL8hDT.yJwgnhrnMESjkWp2nksMdcAnWW/FRai',
    imageAvatar: 'https://i.pravatar.cc/500',
    isAdmin: true,
    createdAt: '2022-02-27T21:52:19.752Z',
    updatedAt: '2022-02-27T21:52:19.752Z'
  };

  //TODO: Refactoring with Redux
  //Get all conversations users
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/chat/conversation/' + user._id);
        setConversations(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, [user._id]);

  //TODO: Refactoring with Redux
  //Get messages current conversation
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/chat/message/' + currentChat._id);
        setMessages(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmitMessage = async (event) => {
    event.preventDefault();
    const sendMessage = {
      userSenderId: user._id,
      conversationId: currentChat._id,
      text: newMessage
    };

    try {
      const res = await axios.post('http://localhost:3000/api/v1/chat/message', sendMessage);
      setMessages([...messages, res.data.results]);
      setNewMessage(''); //Reset input
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
              {conversations.map((conversation) => (
                //Select one conversation in list conversations and currentChat
                <div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
                  <Conversation conversation={conversation} currentUser={user} />
                </div>
              ))}
            </div>
          </div>

          {/*Box */}
          <div className="chat-col-messages">
            <div className="chat-col-messages-box">
              {currentChat ? (
                <>
                  <div className="chat-box-top">
                    {messages.map((message) => (
                      <div ref={scrollRef}>
                        <Message
                          key={message._id}
                          message={message}
                          own={message.userSenderId === user._id}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="chat-box-bottom">
                    <div className="input-item">
                      <textarea
                        className="input "
                        type="text"
                        id="message"
                        placeholder="Write your message..."
                        col="30"
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <Button secondary onClick={handleSubmitMessage}>
                        Send
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div>Open a conversation to start a chat.</div>
              )}
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
