import React from 'react';
import './Message.scss';

function Message({ own }) {
  return (
    <div id="message">
      <div className={own ? 'message-content own' : 'message-content'}>
        <div className="message-top">
          <img src="https://i.pravatar.cc/500" alt="" />
          <div>
            <p className="message-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis tincidunt
              placerat. Phasellus a augue ligula. Vivamus quis enim ipsum. Curabitur gravida dui
              vitae pharetra porttitor. Aenean a tellus eget felis vestibulum molestie. Curabitur
              cursus risus in mi egestas, quis mattis metus elementum.
            </p>
            <div className="message-bottom">1 hour ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
