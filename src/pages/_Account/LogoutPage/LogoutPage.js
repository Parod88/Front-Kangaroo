import React from 'react';
import Button from '../../../components/Button/Button';
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
            <Button primaryOutline>Cancel</Button>
            <Button secondary>Yes, I'm sure</Button>
          </div>
        </div>
      </LayoutAccount>
    </div>
  );
}

export default LogoutPage;
