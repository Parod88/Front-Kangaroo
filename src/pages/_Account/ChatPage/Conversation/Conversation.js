import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdvertDetail } from '../../../../store/actions';
import { getAdvertDetail } from '../../../../store/selectors/selectors';

import './Conversation.scss';

function Conversation({ conversation, currentUser, onlineUsers }) {
  //TODO: Implement in REDUX

  const [user, setUser] = useState({});
  const [outlined, SetOutlined] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const friend = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios('http://localhost:3000/api/v1/user/' + friend);
        setUser(res.data.results);
      } catch (err) {
        console.log('error: ', err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  useEffect(() => {
    if (onlineUsers.includes(currentUser)) {
      SetOutlined(true);
    } else {
      SetOutlined(false);
    }
  }, [currentUser, onlineUsers]);

  const advert = useSelector((state) => getAdvertDetail(state, conversation.advertisement));
  useEffect(() => {
    dispatch(loadAdvertDetail(conversation.advertisement));
  }, [dispatch, conversation.advertisement]);

  return (
    <div id="conversation">
      <Link to={`/advert/${advert?._id}`}>
        <img src={advert?.image} alt="" />
      </Link>
      <div className="conversation-data">
        <p>{user?.name}</p>
        <p>{advert?.name}</p>
        <p>{outlined ? 'Connected' : 'Disconected'}</p>
      </div>
    </div>
  );
}

export default Conversation;
