import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PasswordForgotPage.scss';

function PasswordForgotPage() {
  const [sendEmail, setSendEmail] = useState(false);

  return (
    <div id="password-forgot-page">
      <div className="modal">
        {/*TODO: implement condition states UI*/}
        {!sendEmail ? (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Forgot your password?</h1>
              <p className="subtitle">
                Enter the email address associated with yout account and we will send you a link to
                reset your password.
              </p>
            </div>

            <div className="body">
              <div className="input-item">
                <label>Enter your email</label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  onChange={() => alert('implement')}
                ></input>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSendEmail(true);
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
              <h1 className="title">Check yout email</h1>
              <p className="subtitle">
                We sent a password reset link to
                <span>emailsample@gmail.com</span>
              </p>
            </div>

            <div className="body">
              <div>
                <button>Open email app</button>
              </div>
              <p>
                Didn’t receive the email?{' '}
                <button
                  onClick={() => {
                    setSendEmail(false);
                  }}
                >
                  Click to resend
                </button>
              </p>
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

export default PasswordForgotPage;
