import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ChatPage.scss';
import ChatUsersOnline from './ChatUsersOnline/ChatUsersOnline';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../store/selectors/selectors';
import { loadAdvertDetail } from '../../../store/actions';
import { useDispatch } from 'react-redux';

function ChatPage() {
  //TODO: User data mock simulate login. Implemento with redux and finaly authentication

  const dispatch = useDispatch();

  const [conversations, setConversations] = useState([]);
  const [currentConversation, setcurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();
  const userData = useSelector(getUserData);

  //TODO: Refactoring with Redux

  //Init socket
  useEffect(() => {
    socket.current = io('http://localhost:8900');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        userSenderId: data.userSenderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.userSenderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation]);

  //Online users
  useEffect(() => {
    socket.current.emit('addUser', userData._id);
    //TODO:Filter users followin video
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
    });
  }, [userData._id]);

  //Get all conversations users
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/chat/conversation/' + userData._id
        );
        setConversations(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, [userData._id]);

  //TODO: Refactoring with Redux
  //Get messages current conversation
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/chat/message/' + currentConversation._id
        );
        setMessages(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentConversation]);

  const handleSubmitMessage = async (event) => {
    event.preventDefault();
    const sendMessage = {
      userSenderId: userData._id,
      conversationId: currentConversation._id,
      text: newMessage
    };

    //Socket
    const userReceiverId = currentConversation.members.find((member) => member !== userData._id);
    socket.current.emit('SendMessage', {
      userSenderId: userData._id,
      userReceiverId: userReceiverId,
      text: newMessage
    });

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
            <h4>Your conversations</h4>
            <div className="chat-col-menu-box">
              {conversations.map((conversation) => (
                //Select one conversation in list conversations and currentConversation
                <div key={conversation._id} onClick={() => setcurrentConversation(conversation)}>
                  <Conversation
                    conversation={conversation}
                    currentUser={userData}
                    onlineUsers={onlineUsers}
                  />
                </div>
              ))}
            </div>
          </div>
          {/*Box */}
          <div className="chat-col-messages">
            <div className="chat-col-messages-box">
              {currentConversation ? (
                <>
                  <div className="chat-box-top">
                    {messages.map((message) => (
                      <div key={message._id} ref={scrollRef}>
                        <Message message={message} own={message.userSenderId === userData._id} />
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

          {/*Chat*/}
          {/* <div className="chat-col-users-online">
            <ChatUsersOnline
              onlineUsers={onlineUsers}
              currentUserId={userData._id}
              setcurrentConversation={setcurrentConversation}
            />
          </div> */}
        </div>
      </LayoutAccount>
    </div>
  );
}

export default ChatPage;
