import React, { useState } from 'react';
import LayoutAccount from '../../../../components/LayoutAccount/LayoutAccount';
import './AdvertCreate.scss';

function AdvertCreate() {
  //TODO: if url with id them edit. Not id them create
  //TODO: add conditional render for title and data

  //TODO: Mock data categories

  const categories = ['All', 'Cars', 'Accesories', 'TV, Audio & Photo', 'Home & garden', 'Music'];
  return (
    <LayoutAccount
      title={'Edit/Create Product'}
      subtitle={'Lorem ipsum dolor sit amet, consectetur'}
    >
      <div id="advert-create">
        <div className="account-container">
          <div className="grid-two-cols">
            <div className="input-item">
              <label>English Title</label>
              <input
                className="input"
                type="text"
                id="enTitle"
                placeholder="Enter English Title"
                required
                // onChange={}
              ></input>
            </div>
            <div className="input-item">
              <label>Spanish Title</label>
              <input
                className="input"
                type="text"
                id="esTitle"
                placeholder="Enter Spanish Title"
                required
                // onChange={}
              ></input>
            </div>

            <div className="input-item">
              <label>English Description</label>
              <textarea
                className="input"
                type="text"
                id="enDescription"
                placeholder="Enter a product description"
                rows="6"
                cols="50"
                required
                // onChange={}
              ></textarea>
            </div>
            <div className="input-item">
              <label>Spanish Description</label>
              <textarea
                className="input"
                type="text"
                id="esDescription"
                placeholder="Enter a product description"
                rows="6"
                cols="50"
                required
                // onChange={}
              ></textarea>
            </div>

            <div className="input-item">
              <label>Price</label>
              <input
                className="input"
                type="number"
                id="price"
                placeholder="Enter price"
                required
                // onChange={}
              ></input>
            </div>
            <div className="input-item">
              <label>Type</label>
              <select name="select">
                <option value="sale" selected>
                  Sale
                </option>
                <option value="purchase">Purchase</option>
              </select>
            </div>

            <div className="input-item">
              {/*TODO:Implement library react-tag-input */}
              <label>Aditional Tags</label>
              <input
                className="input"
                type="text"
                id="tags"
                placeholder="Enter yout tags separate,"
                // onChange={}
              ></input>
            </div>

            <div className="input-item">
              <label>Categories</label>
              <div className="categories">
                {categories.map((categorie) => (
                  <label key={categorie}>
                    <input type="checkbox" value={categorie} />
                    {categorie}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/*TODO: Add library react-dropzone load images*/}
          <div>
            <h4>Media</h4>
            <div className="grid-two-cols">
              <div>
                <img alt="" src="https://bit.ly/3whTDiz" />
              </div>
              <div>Image // LIBRARY REACT-DROPZONE</div>
              <div>
                <div>
                  <img alt="" src="https://bit.ly/3whTDiz" />
                  <img alt="" src="https://bit.ly/3whTDiz" />
                  <img alt="" src="https://bit.ly/3whTDiz" />
                </div>
              </div>
              Gallery // LIBRARY REACT-DROPZONE
            </div>
          </div>

          <div>
            <button>Create or Update Product</button>
          </div>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default AdvertCreate;
