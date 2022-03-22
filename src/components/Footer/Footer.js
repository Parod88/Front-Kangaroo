import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../Button/Button';

function Footer() {
  const mockCategories = [
    'Cars',
    'Accesories',
    'Real State',
    'TV, Audio & Photo',
    'Electronics',
    'Flims, Books & Music',
    'Services',
    'Sports',
    'Motor & Accesories',
    'Collections',
    'Others',
    'Videogames',
    'Motorbike'
  ];
  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper">
          {/*Section 1*/}
          <div className="footer-section-1">
            <Link to="/">
              <img src={KangarooBrand} alt="brand" />
            </Link>
            <div className="social-icons">
              <p>Follow Us On Social Media</p>
              <ul>
                <li>
                  <a href="facebook">social</a>
                </li>
                <li>
                  <a href="facebook">social</a>
                </li>
                <li>
                  <a href="facebook">social</a>
                </li>
                <li>
                  <a href="facebook">social</a>
                </li>
              </ul>
            </div>
          </div>

          {/*Section 2*/}
          <div className="footer-section-2">
            <div className="col">
              <h4 className="title">About</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="">How it Works</Link>
                </li>
                <li>
                  <Link to="">Carrers</Link>
                </li>
                <li>
                  <Link to="">Press</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Categories</h4>
              <ul className="categories-two-col">
                {/*TODO: Mock data: Load dabatase categories*/}
                {mockCategories.map((categorie) => (
                  <li key={categorie}>
                    <Link to="">{categorie}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Support</h4>
              <ul>
                <li>
                  <Link to="">Documentation</Link>
                </li>
                <li>
                  <Link to="">FAQ's</Link>
                </li>
                <li>
                  <Link to="">Dashboard</Link>
                </li>
                <li>
                  <Link to="">Support Center</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Get in touch</h4>
              <p>We don't send spam so don't worry.</p>
              <form className="newsletter-form">
                <input
                  className="input"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  onChange={() => alert('implement')}
                ></input>
                <Button
                  primary
                  rounded
                  className="newsletter-button"
                  type="submit"
                  value="Enviar datos"
                >
                  submit
                </Button>
              </form>
            </div>
          </div>

          {/*Section 3*/}
          <div className="footer-section-3">
            <div>© 2022 Kangaroo. All Right Reserved.</div>
            <div className="menu-secondary">
              <Link to="">Help</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Cookie Notice</Link>
              <Link to="">Security</Link>
              <Link to="">Terms of Use</Link>
              <Button language>icon English</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
