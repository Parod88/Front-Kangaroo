import React from 'react';
import Button from '../../../../components/Button/Button';

function TabProfilePassword() {
  return (
    <div id="tab-profile-password">
      <form>
        <div className="input-item">
          <label>Current password</label>
          <input
            className="input"
            type="password"
            id="currentPassword"
            placeholder="Enter your current password"
            required
            // onChange={}
          ></input>
        </div>

        <div className="input-item">
          <label>New password</label>
          <input
            className="input"
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            required
            // onChange={}
          ></input>
        </div>

        <div className="input-item">
          <label>Confirm new password</label>
          <input
            className="input"
            type="password"
            id="confirmNewPassword"
            placeholder="Repeat the new password"
            required
            // onChange={}
          ></input>
        </div>
      </form>
      <Button secondary>Update Password</Button>
    </div>
  );
}

export default TabProfilePassword;
