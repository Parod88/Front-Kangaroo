import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useDispatch } from 'react-redux';
import './LoginPage.scss';
import { loginInitiate } from '../../../store/actions';

function LoginPage() {
  const dispatch = useDispatch();

  const [value, setValue] = useState({ email: '', password: '', rememberMe: false });

  const handleChange = ({ target: { value, name } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangeCheckbox = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginInitiate(value));
  };

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
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="input-item">
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={value.email}
                  required
                  onChange={handleChange}
                ></input>
              </div>

              <div className="input-item">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={value.password}
                  required
                  onChange={handleChange}
                ></input>
              </div>

              <div className="options">
                <div className="remenberme">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={value.rememberMe}
                    onChange={handleChangeCheckbox}
                  />
                  <label>Remember me </label>
                </div>
                <div>
                  <Link to="/forgot-password">Forgot your password</Link>
                </div>
              </div>

              <div>
                <Button secondary full type="submit" disabled={!value.email || !value.password}>
                  Login
                </Button>
              </div>
            </form>
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
