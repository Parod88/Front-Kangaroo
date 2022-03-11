import React from 'react';
import { Link } from 'react-router-dom';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ProfilePage.scss';

function ProfilePage() {
  return (
    <LayoutAccount>
      <Link to="/account/5/edit">
        <button>Edit user profile</button>
      </Link>
    </LayoutAccount>
  );
}

export default ProfilePage;
