import React from 'react';
import './HeaderUserProfile.scss';

function HeaderUserProfile() {
  return (
    <section id="header-user-profile">
      <div className="user-info-box">
        <div>
          <img alt="" src="https://i.pravatar.cc/500" />
        </div>
        <div>
          <h3>José G.</h3>
          <p>starst</p>
          <div>
            <p>icon</p>
            <p>
              <span>0</span> seguidores, <span>12</span> siguiendo
            </p>
          </div>
        </div>
      </div>

      <div className="location-box">
        <h4>Sobre mi:</h4>
        <p>
          <span>icon</span>
          25 Sales - 1 Buy
        </p>
        <p>
          <span>icon</span>
          Santiago de Compostela <br />A Coruña, España
        </p>
      </div>

      <div className="map-box">Map</div>

      <div className="buttons-group">
        <button>Follow</button>
        <button>Send Message</button>
        <button>...</button>
      </div>
    </section>
  );
}

export default HeaderUserProfile;
