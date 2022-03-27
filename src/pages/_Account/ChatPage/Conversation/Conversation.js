import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Conversation.scss';

function Conversation({ conversation, currentUser }) {
  //TODO: Implement in REDUX

  const [user, setUser] = useState({});

  useEffect(() => {
    const friend = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios('http://localhost:3000/api/v1/user/' + friend._id);
        setUser(res.data.results);
      } catch (err) {
        console.log('error: ', err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div id="conversation">
      <img src={user.imageAvatar} alt="" />
      <span>{user.name}</span>
    </div>
  );
}

export default Conversation;
