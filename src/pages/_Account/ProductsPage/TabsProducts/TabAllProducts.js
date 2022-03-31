import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCardAccount from '../../../../components/AdvertCardAccount/AdvertCardAccount';
import { loadPaginatedAdverts } from '../../../../store/actions';
import { getAdverts } from '../../../../store/selectors/selectors';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';

function TabAllProducts() {
  const dispatch = useDispatch();
  const limitPagination = 300;

  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  return (
    <>
      <section>
        <ul className="tab-grid-cards">
          {adverts.length > 0 ? (
            adverts.slice(0, limitPagination).map((advert) => (
              <li key={advert._id}>
                <AdvertCardAccount advert={advert} />
              </li>
            ))
          ) : (
            <div>
              <NotResultsFound />
            </div>
          )}
        </ul>
      </section>
    </>
  );
}

export default TabAllProducts;
