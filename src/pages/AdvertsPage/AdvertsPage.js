import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import SectionSlider from './SectionSlider/SectionSlider';
import './AdvertsPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { loadPaginatedAdverts } from '../../store/actions';
import { getAdverts } from '../../store/selectors/selectors';
import { useEffect } from 'react';

function AdvertsPage(history, ...props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);

  return (
    <LayoutGeneral>
      <SectionSlider
        adverts={adverts}
        title={'Featured consoles'}
        subtitle={'Discover the most desired consoles of the moment'}
        category={'category'}
        limit={4}
      />

      <SectionSlider
        adverts={adverts}
        title={'Featured consoles'}
        subtitle={'Discover the most desired consoles of the moment'}
        category={'category'}
        limit={4}
      />
    </LayoutGeneral>
  );
}

export default AdvertsPage;
