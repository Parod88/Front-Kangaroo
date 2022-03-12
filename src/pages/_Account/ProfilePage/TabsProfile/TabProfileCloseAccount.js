import React from 'react';
import './TabProfileCloseAccount.scss';

function TabProfileCloseAccount() {
  return (
    <div id="tab-profile-close-account">
      <div className="info-box">
        <span>icon</span>
        <div>
          <h3>Are you sure?</h3>
          <p>Once you confirm, all of your account data will be permanently delete.</p>
        </div>
      </div>

      <div className="input-item">
        <label>
          Type DELETE to confirm
          <p>To confirm this, type "DELETE"</p>
        </label>
        <input
          className="input"
          type="text"
          id="delete"
          placeholder=""
          required
          // onChange={}
        ></input>
      </div>
      <button>Delete Your Account</button>
    </div>
  );
}

export default TabProfileCloseAccount;
