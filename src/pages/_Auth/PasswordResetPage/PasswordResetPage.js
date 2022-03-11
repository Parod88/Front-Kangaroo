import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PasswordResetPage.scss';

function PasswordResetPage() {
  const [resetPassword, setResetPassword] = useState(false);

  return (
    <div id="password-reset-page">
      <div className="modal">
        {/*TODO: implement logic email for reset forgot password*/}
        {!resetPassword ? (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Set a new password?</h1>
              <p className="subtitle">
                Your new password must be different to previously used password.
              </p>
            </div>

            <div className="body">
              <div className="input-item">
                <label>Password *</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  onChange={() => alert('implement')}
                ></input>
              </div>

              <div className="input-item">
                <label>Confirm Password *</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  onChange={() => alert('implement')}
                ></input>
              </div>

              <div>
                <button
                  onClick={() => {
                    setResetPassword(true);
                  }}
                >
                  send email
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Password reset</h1>
              <p className="subtitle">
                Yout password has been success reset.
                <br />
                Click bellow to login.
              </p>
            </div>

            <div className="body">
              <button
                onClick={() => {
                  setResetPassword(false);
                }}
              >
                Continue{' '}
              </button>
            </div>
          </>
        )}
        <div className="footer">
          <p>
            <span>icon </span>
            <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetPage;
