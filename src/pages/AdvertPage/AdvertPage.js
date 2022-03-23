import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { loadAdvertDetail } from '../../store/actions';
import { getAdvertDetail, getAdverts } from '../../store/selectors/selectors';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import SectionSlider from '../../pages/HomePage/SectionSlider/SectionSlider';
import ReviewStartAndCount from '../../components/ReviewStartAndCount/ReviewStartAndCount';
import './AdvertPage.scss';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function AdvertPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const advert = useSelector((state) => getAdvertDetail(state, id));
  const adverts = useSelector((state) => getAdverts(state));

  const currentUrl = window.location.href;

  useEffect(() => {
    dispatch(loadAdvertDetail(id));
  }, [dispatch, id]);

  const handlerFollow = () => {
    alert('implement');
  };
  const handlerMessage = () => {
    alert('implement');
  };

  return advert ? (
    <LayoutGeneral>
      <div id="advert-page">
        <div className="container">
          <div>
            <img alt="" src={advert.image}></img>
          </div>

          <div className="grid">
            <div className="col-left">
              <div className="header">
                <h1>{advert.name}</h1>
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
                  <p>{advert.description}</p>
                </div>

                <div>
                  <h3>Categories</h3>
                  <ul>
                    {advert?.categories.map((categorie, index) => (
                      <li key={index}>{categorie.name}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Related tags</h3>
                  <div>
                    {advert?.tags.map((tag, index) => (
                      <p key={index}>{tag}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right">
              <div className="card">
                <div className="avatar-content">
                  <Link to={`/user/${advert?.author._id}`}>
                    <div>
                      <img src={advert?.author.imageAvatar}></img>
                    </div>
                    <div>
                      <p>{advert.author.name}</p>
                      <ReviewStartAndCount reviewCount={45} reviewStart={3.5} />
                    </div>
                  </Link>
                </div>

                <div className="buttons-group">
                  <Button secondaryOutline full onClick={handlerFollow}>
                    Follow
                  </Button>
                  <Button secondary full onClick={handlerMessage}>
                    Send Message
                  </Button>
                </div>

                <div className="social-icons">
                  <h4>Share product:</h4>
                  <div className="icons-row">
                    <EmailShareButton url={currentUrl}>
                      <EmailIcon size={40} round={true} />
                    </EmailShareButton>

                    <FacebookShareButton
                      url={currentUrl}
                      quote={'Title'}
                      hashtag={'#segundamano, #coche'}
                    >
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    <TelegramShareButton url={currentUrl} title={advert.name}>
                      <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>

                    <LinkedinShareButton
                      url={currentUrl}
                      title={advert.name}
                      summary={advert.description}
                      source={'https://kangaroostore.es'}
                    >
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>

                    <TwitterShareButton
                      url={currentUrl}
                      quote={'Title'}
                      hashtag={'#segundamano, #coche'}
                    >
                      <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>

                    <WhatsappShareButton url={currentUrl}>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <SectionSlider
            adverts={adverts}
            title={'Similar products that may interest you'}
            subtitle={'Discover the most desired of the moment'}
            limit={4}
          />
        </div>
      </div>
    </LayoutGeneral>
  ) : (
    <div>El anuncio no existe</div>
  );
}

export default AdvertPage;
