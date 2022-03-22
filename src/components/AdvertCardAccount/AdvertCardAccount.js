import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertImage from '../AdvertImage/AdvertImage';
import { useDispatch, useSelector } from 'react-redux';

import './AdvertCardAccount.scss';
import { deleteAdvert, updateAdvert } from '../../store/actions';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
const { formatDistanceToNow } = require('date-fns');

const AdvertCardAccount = ({ advert, ...props }) => {
  const dispatch = useDispatch();

  const { _id, name, advertState, price, image, updatedAt } = advert;

  const urlNoImage =
    'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

  const [state, setState] = useState(advertState);
  const handlerState = (event) => {
    setState(event.target.value);
    // dispatch(updateAdvert({ advertState: state }));
    alert('implement');
    //TODO: Implemente methods change state
  };

  //Modal control
  const [modalConfirm, setConfirm] = useState(false);

  const handlerConfirm = () => {
    setConfirm(modalConfirm ? false : true);
  };

  const handlerDelete = (event) => {
    dispatch(deleteAdvert(_id));
    handlerConfirm(false);
  };

  return (
    <>
      <article id="advert-card-account">
        <div className="content-card-account">
          <Link to={`/advert/${_id}`}>
            <div className="content-flex">
              <div>
                <img alt={name} src={image ? image : urlNoImage} className="cover-image" />
              </div>
              <div className="body">
                <p>${price}</p>
                <h4 className="title">{name}</h4>
              </div>
              <div>
                <p>Published: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
              <div>
                <p>Modificado: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
            </div>
          </Link>

          <div className="actions">
            {/* <button onClick={handlerState}>Vendido</button> */}

            <select value={state} onChange={handlerState}>
              <option value="ForSale">For Sale</option>
              <option value="Inactive">Inactive</option>
              <option value="Finished">Finished</option>
            </select>

            <Link className="content-flex" to={`/account/products/edit/${_id}`}>
              <button>Editar</button>
            </Link>

            <button onClick={handlerConfirm}>Delete</button>
          </div>
        </div>
      </article>

      {modalConfirm && (
        <ConfirmDialog
          title={'Are you want to delete this ad?'}
          onConfirm={handlerDelete}
          onClose={handlerConfirm}
        />
      )}
    </>
  );
};
export default AdvertCardAccount;
