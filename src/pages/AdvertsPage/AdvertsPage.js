import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import './AdvertsPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { loadPaginatedAdverts } from '../../store/actions';
import { getAdverts, getUi } from '../../store/selectors/selectors';
import { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import FiltersSection from './FiltersSection/FiltersSection';
import NotResultsFound from '../../components/NotResultsFound/NotResultsFound';
import { Toaster, toast } from 'react-hot-toast';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import CustomToaster from '../../components/CustomToaster/CustomToaster';

function AdvertsPage(history, ...props) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  useEffect(() => {
    if (error) {
      toast.error(`${error.message}: ${error.error}`);
    }
  }, [error]);

  //TODO: read params url and load data. Adverts general or categorie

  //TODO: Limit pagination is a mock data
  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);

  return (
    <div id="adverts-page">
      <LayoutGeneral>
        <Breadcrumbs />
        {!isLoading ? (
          <>
            <SectionTitle
              title={'What are you looking for today?'}
              subtitle={'Write an introductory description of the category.'}
            />
            <FiltersSection />
            <section className="container ">
              <ul className="grid-cards">
                {adverts.length > 0 ? (
                  adverts.slice(0, limitPagination).map((advert) => (
                    <li key={advert._id}>
                      <AdvertCard advert={advert} />
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
        ) : (
          !isLoading && <NotResultsFound />
        )}
        {/*Loading and errors */}
        {isLoading && <LoadingBox />}
        {error && <CustomToaster />}
      </LayoutGeneral>
    </div>
  );
}

export default AdvertsPage;
