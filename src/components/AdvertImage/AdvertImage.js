import React from 'react';

function AdvertImage({ imageServer, alt }) {
  const urlPhoto = `${process.env.REACT_APP_WALLACLONE_API_BASE_URL}/uploads/${imageServer}`;
  const noImage = `${process.env.REACT_APP_WALLACLONE_API_BASE_URL}/uploads/noimage.jpg`;

  if (imageServer) {
    return (
      <div>
        <img src={urlPhoto} alt={alt} />
      </div>
    );
  } else {
    return (
      <div>
        <img src={noImage} alt="" />
      </div>
    );
  }
}

export default AdvertImage;
