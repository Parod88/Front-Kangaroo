import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './RegisterPage.scss';

function RegisterPage() {
  return (
    <div id="register-page">
      <div className="col-left">Image</div>
      <div className="col-right">
        <div className="modal">
          <div className="header">
            <h1 className="title">Create account</h1>
            <p className="subtitle">
              Already have an account?{' '}
              <span className="link">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </div>

          <div className="body">
            <div className="grid-inputs">
              <div className="input-item">
                <label>Email address *</label>
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
                <label>Username *</label>
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
            </div>

            <div className="options">
              <div className="remenberme">
                <input
                  name="remenber me"
                  type="checkbox"
                  checked={''}
                  onChange={() => alert('implement')}
                />
                <label>
                  Accept the <Link to="/terms">Terms</Link> and{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>{' '}
                </label>
              </div>
            </div>

            <div>
              <Button secondary full>
                Create account
              </Button>
            </div>
          </div>

          <div className="footer">
            <p>Or sign in using</p>
            <div className="button-group">
              <button>Create account via Facebbok</button>
              <button>Create account via Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
