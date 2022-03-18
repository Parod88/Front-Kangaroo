import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import { deleteUser } from '../../../../store/actions';
import './TabProfileCloseAccount.scss';

function TabProfileCloseAccount() {
  const [value, setValue] = useState({
    deleteAccount: ''
  });
  const handleChange = () => {
    setValue((event) => ({
      [event.target.name]: event.taget.value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value.deleteAccount === 'delete') {
      return dispatchEvent(deleteUser);
    }
  };

  return (
    <div id="tab-profile-close-account">
      <div className="info-box">
        <span>icon</span>
        <div>
          <h3>Are you sure?</h3>
          <p>Once you confirm, all of your account data will be permanently delete.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label>
            Type DELETE to confirm
            <p>To confirm this, type "DELETE"</p>
          </label>
          <input
            name="deleteAccount"
            className="input"
            type="text"
            id="delete"
            placeholder=""
            required
            value={value.deleteAccount}
            onChange={handleChange}
          ></input>
        </div>
        <Button type="submit" secondary>
          Delete Your Account
        </Button>
      </form>
    </div>
  );
}

export default TabProfileCloseAccount;
