import React from 'react';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './LogoutPage.scss';

function LogoutPage() {
  return (
    <div id="logout-page">
      <LayoutAccount title={'Logout'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
        <div className="account-container">
          <h3>Hope to see you back soon</h3>
          <p>are you sure you want to logout from Kangaroo?</p>

          <div>
            <button>Cancel</button>
            <button>Yes, I'm sure</button>
          </div>
        </div>
      </LayoutAccount>
    </div>
  );
}

export default LogoutPage;
