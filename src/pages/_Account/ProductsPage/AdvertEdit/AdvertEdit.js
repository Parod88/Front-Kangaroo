import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutAccount from '../../../../components/LayoutAccount/LayoutAccount';
import AdvertImage from '../../../../components/AdvertImage/AdvertImage';
import './AdvertEdit.scss';
import {
  getCategories,
  getTags,
  getUi,
  getAdvertDetail
} from '../../../../store/selectors/selectors';
import { updateAdvert } from '../../../../store/actions/AdvertActions';
import { loadAdvertDetail } from '../../../../store/actions/AdvertDetailActions';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';
import Button from '../../../../components/Button/Button';
import InputFileUpload from '../../../../components/InputFileUpload/InputFileUpload';
import { useHistory, useParams } from 'react-router-dom';
import imageNoPhoto from '../../../../resources/images/no-image.png';
import { loadCategories } from '../../../../store/actions/CategoryActions';
import { TagsInput } from 'react-tag-input-component';

function AdvertEdit({ ...props }) {
  const navigate = useHistory();
  const { id: advertId } = useParams();

  //TODO: if url with id them edit. Not id them create
  //TODO: add conditional render for title and data

  const user = {
    _id: '621bf293e5330d28f939097b'
  };

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);

  useEffect(() => {
    dispatch(loadAdvertDetail(advertId));
  }, [dispatch, advertId]);

  const advert = useSelector((state) => getAdvertDetail(state, advertId));
  console.log('advert', advert);

  //=============================================
  //Handler
  //=============================================
  const [name, setName] = useState('');
  const handlerName = (event) => {
    setName(event.target.value);
  };

  const [nameEn, setNameEn] = useState('');
  const handlerNameEn = (event) => {
    setNameEn(event.target.value);
  };

  const [description, setDescription] = useState('');
  const handlerDescription = (event) => {
    setDescription(event.target.value);
  };

  const [descriptionEn, setDescriptionEn] = useState('');
  const handlerDescriptionEn = (event) => {
    setDescriptionEn(event.target.value);
  };

  const [type, setType] = useState(true);
  const handlerType = (event) => {
    setType(event.target.value);
  };

  const [advertState, setAdvertState] = useState('');
  const handlerState = (event) => {
    setAdvertState(event.target.value);
  };

  const [price, setPrice] = useState(0);
  const handlerPrice = (event) => {
    setPrice(event.target.value);
  };

  const categories = useSelector(getCategories) || [];
  const [selectCategories, setSelectCategories] = useState([]);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCheckCategories = (event) => {
    var listCategories = [...selectCategories];
    if (event.target.checked) {
      listCategories = [...selectCategories, event.target.value];
    } else {
      listCategories.splice(selectCategories.indexOf(event.target.value), 1);
    }
    setSelectCategories(listCategories);
  };

  // //Tags
  const [selectTags, setSelectTags] = useState([]);

  //Image
  const [gallery, setGallery] = useState(0);
  const handlerGallery = (event) => {
    setGallery(event.target.value);
  };

  const [image, setImage] = useState();
  const [imageRender, setImageRender] = useState({ imageNoPhoto });
  const handlerImage = (event) => {
    const reader = new FileReader();

    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageRender({ imageNoPhoto: reader.result });
      }
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (advert) {
      setName(advert.name);
      setNameEn(advert.nameEn);
      setDescription(advert.description);
      setDescriptionEn(advert.descriptionEn);
      setType(advert.type);
      setPrice(advert.price);
      setAdvertState(advert.state);
      setSelectCategories(advert.categories);
      setSelectTags(advert.tags);
      setImageRender(advert.image);
      setImage(advert.image);
    }
  }, [advert]);

  console.log('advert', advert);

  //Send form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectCategories.length) {
      alert('Select one categorie'); //TODO: Create error
    } else {
      const newAdvertFormData = new FormData();
      newAdvertFormData.set('name', name);
      newAdvertFormData.set('nameEn', nameEn);
      newAdvertFormData.set('description', description);
      newAdvertFormData.set('descriptionEn', descriptionEn);
      newAdvertFormData.set('sale', type);
      newAdvertFormData.set('state', advertState);
      newAdvertFormData.set('price', price);
      newAdvertFormData.set('categories', selectCategories);
      newAdvertFormData.set('gallery', gallery);
      newAdvertFormData.set('tags', selectTags);
      newAdvertFormData.set('author', user._id);
      if (image) {
        newAdvertFormData.set('image', image);
      }
      dispatch(updateAdvert(newAdvertFormData, advertId));
    }
  };

  const handlerDelete = () => {
    alert('eleiminar');
  };

  return (
    <LayoutAccount title={'Edit Product'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="advert-create">
        <p>{type}</p>
        <div className="account-container">
          <form className="form" onSubmit={handleFormSubmit}>
            {!isLoading ? (
              <>
                <section className="grid-two-cols">
                  {/* Spanish title */}
                  <div className="input-item">
                    <label>Spanish Title</label>
                    <input
                      className="input"
                      type="text"
                      id="name"
                      placeholder="Enter Spanish Title"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    ></input>
                  </div>

                  {/* Spanish Description */}
                  <div className="input-item">
                    <label>Spanish Description</label>
                    <textarea
                      className="input"
                      type="text"
                      id="description"
                      placeholder="Enter a product description"
                      rows="6"
                      cols="50"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                  </div>

                  {/* English Description */}
                  <div className="input-item">
                    <label>English Title</label>
                    <input
                      className="input"
                      type="text"
                      id="nameEn"
                      placeholder="Enter English Title"
                      value={nameEn}
                      onChange={(event) => setNameEn(event.target.value)}
                    ></input>
                  </div>

                  {/* English Description */}
                  <div className="input-item">
                    <label>English Description</label>
                    <textarea
                      className="input"
                      type="text"
                      id="descriptionEn"
                      placeholder="Enter a product description"
                      rows="6"
                      cols="50"
                      value={descriptionEn}
                      onChange={(event) => setDescriptionEn(event.target.value)}
                    ></textarea>
                  </div>

                  <div className="radio-options">
                    <p className="options-title">State:</p>
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="state"
                        id="ForSale"
                        value="ForSale"
                        checked={advertState === 'ForSale'}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="ForSale">
                        <p>+ </p>
                        <p>ForSale</p>
                      </label>
                      <input
                        type="radio"
                        name="state"
                        id="Inactive"
                        value="Inactive"
                        checked={advertState === 'Inactive'}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="Inactive">
                        <p>+ </p>
                        <p>Inactive</p>
                      </label>
                      <input
                        type="radio"
                        name="state"
                        id="Finished"
                        value="Finished"
                        checked={advertState === 'Finished'}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="Finished">
                        <p>+ </p>
                        <p>Finished</p>
                      </label>
                    </div>
                  </div>

                  {/* Type Sale  */}
                  <div className="radio-options">
                    <p className="options-title">Type:</p>
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="type"
                        id="Sale"
                        value="Sale"
                        checked={type === 'Sale'}
                        onChange={handlerType}
                      />
                      <label className="label-radio" htmlFor="Sale">
                        <p>+ </p>
                        <p>Sale</p>
                      </label>
                      <input
                        type="radio"
                        name="type"
                        id="Purchase"
                        value="Purchase"
                        checked={type === 'Purchase'}
                        onChange={handlerType}
                      />
                      <label className="label-radio" htmlFor="Purchase">
                        <p>+ </p>
                        <p>Purchase</p>
                      </label>
                    </div>
                  </div>
                </section>

                {/* Tags */}
                <section className="section grid-two-cols">
                  <div className="input-item">
                    {/*TODO:Implement library react-tag-input */}
                    <label>Aditional Tags</label>
                    <TagsInput
                      value={selectTags}
                      onChange={setSelectTags}
                      name="tags"
                      placeHolder="Enter tags related your product"
                    />
                  </div>

                  {/* Price*/}
                  <div className="input-item">
                    <label>Price</label>
                    <input
                      className="input"
                      min="0"
                      step="any"
                      type="number"
                      id="price"
                      placeholder="Enter price"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    ></input>
                  </div>
                </section>

                {/*TODO: Add library react-dropzone load images*/}
                {/* Categories */}
                <section className="section">
                  <div className="input-container">
                    <p className="title">Categories: </p>
                    <ul className="categories">
                      {categories.map((category, index) => (
                        <li key={category._id}>
                          <input
                            name="type"
                            type="checkbox"
                            onChange={(e) => handleCheckCategories(e)}
                            value={category._id}
                            checked={selectCategories.includes(category._id) ? true : false}
                          />
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                {/* Image */}

                <section className="section">
                  <div className="input-container">
                    <label>Cover Image: </label>
                    <div className="image">
                      <AdvertImage alt={''} imageServer={advert ? advert.image : ''} />
                    </div>
                    <InputFileUpload
                      onChange={handlerImage}
                      imageNoPhoto={imageRender}
                      validFormats={'image/*'}
                      name={'image-upload'}
                      {...props}
                    />
                  </div>
                </section>
                <section className="footer">
                  <Button primaryOutline onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button primaryOutline onClick={handlerDelete}>
                    Delete Product
                  </Button>
                  <Button secondary type="submit">
                    Save Product
                  </Button>
                </section>
              </>
            ) : (
              !isLoading && <NotResultsFound />
            )}
          </form>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default AdvertEdit;
