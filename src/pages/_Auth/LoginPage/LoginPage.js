import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div id="login-page">
      <div className="col-left">Image</div>
      <div className="col-right">
        <div className="modal">
          <div className="header">
            <h1 className="title">Login</h1>
            <p className="subtitle">
              Don't have an account yet?{' '}
              <span className="link">
                <Link to="/register">Sign up for free</Link>
              </span>
            </p>
          </div>

          <div className="body">
            <div className="input-item">
              <label>Email</label>
              <input
                className="input"
                type="email"
                id="email"
                placeholder="Enter email"
                required
                onChange={() => alert('implement')}
              ></input>
            </div>

            <div className="input-item">
              <label>Password</label>
              <input
                className="input"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={() => alert('implement')}
              ></input>
            </div>

            <div className="options">
              <div className="remenberme">
                <input
                  name="remenber me"
                  type="checkbox"
                  checked={''}
                  onChange={() => alert('implement')}
                />
                <label>Remember me </label>
              </div>
              <div>
                <Link to="/forgot-password">Forgot your password</Link>
              </div>
            </div>

            <div>
              <Button secondary full>
                Login
              </Button>
            </div>
          </div>

          <div className="footer">
            <p>Or sign in using</p>
            <div className="button-group">
              <button>Log In via Facebbok</button>
              <button>Log In via Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
