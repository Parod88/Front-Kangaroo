import React from 'react';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import './ReviewsPage.scss';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';

function ReviewsPage() {
  //TODO: Mock data reviews

  const reviews = [
    {
      _id: 1,
      userName: 'OneUser',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et gravida tortor. Morbi non mi euismod, laoreet neque nec, pretium lacus. Pellentesque dolor dolor, consectetur sed consectetur vitae, commodo eget tellus. ',
      rating: 4,
      updatedAt: '2022-02-27T21:52:19.929Z"'
    },
    {
      _id: 2,
      userName: 'TwoUser',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et gravida tortor. Morbi non mi euismod.',
      rating: 2,
      updatedAt: '2022-02-27T21:53:19.929Z"'
    }
  ];

  return (
    <LayoutAccount title={'Reviews'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="reviews-page">
        <div className="account-container">
          {/*Search and order */}
          <div className="input-item">
            <label>
              Search:{' '}
              <input
                className="input"
                type="text"
                id="search"
                placeholder="Product name, category..."
                required
                // onChange={}
              ></input>
            </label>
          </div>

          <ul className="grid-cards-reviews">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <li key={review._id}>
                  <ReviewCard review={review} />
                </li>
              ))
            ) : (
              <div>
                <NotResultsFound />
              </div>
            )}
          </ul>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default ReviewsPage;
