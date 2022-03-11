import React from 'react';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import './AdvertPage.scss';

function AdvertPage() {
  //TODO: Advert mock data
  const advert = {
    _id: '621bf293e5330d28f93909ca',
    name: 'Guapo Hormigon Bacon',
    description:
      'Quidem et dicta velit quibusdam dolorum id. Voluptates non temporibus. Iure dolore qui sunt libero quia quos consequuntur id maxime. Cum sint quia in.',
    sale: false,
    price: 3,
    image: 'http://placeimg.com/640/480',
    gallery: [
      'http://placeimg.com/1500/1500/sports',
      'http://placeimg.com/1500/1500/sports',
      'http://placeimg.com/1500/1500/sports',
      'http://placeimg.com/1500/1500/sports'
    ],
    tags: ['tag1', 'tag2'],
    author: {
      active: false,
      userToken: null,
      _id: '621bf293e5330d28f939097b',
      name: 'WallacloneAdmin',
      email: 'admin@wallaclone.com',
      password: '$2a$10$LVlsiH6CmLa77LddL8hDT.yJwgnhrnMESjkWp2nksMdcAnWW/FRai',
      imageAvatar: 'https://i.pravatar.cc/500',
      isAdmin: true,
      createdAt: '2022-02-27T21:52:19.752Z',
      updatedAt: '2022-02-27T21:52:19.752Z'
    },
    createdAt: '2022-02-27T21:52:19.929Z',
    updatedAt: '2022-02-27T21:52:19.929Z'
  };

  const { name, description, sale, price, image, gallery, tags, author, categories, updatedAt } =
    advert;

  return (
    <LayoutGeneral>
      <div id="advert-page">
        <div className="container">
          <div>
            <img alt="" src={image}></img>
          </div>

          <div className="grid">
            <div className="col-left">
              <div className="header">
                <h1>{name}</h1>
                <div>
                  <div>
                    <span>icon</span>
                    <p>{}</p>
                  </div>
                </div>
              </div>

              <div className="body">
                <div>
                  <h3>Description</h3>
                  <p>{description}</p>
                </div>

                <div>
                  <h3>Location</h3>
                  <p>Mapa</p>
                </div>

                <div>
                  <h3>Related tags</h3>
                  <div>
                    <button>Tag 1</button>
                  </div>
                </div>
              </div>
              <div className="footer">{description}</div>
            </div>
            <div className="col-right">
              <div className="card">{author.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">Section You may also like</div>
    </LayoutGeneral>
  );
}

export default AdvertPage;
