import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import { loadPaginatedAdverts } from '../../store/actions';
import { getAdverts } from '../../store/selectors/selectors';
import SectionSlider from '../AdvertsPage/SectionSlider/SectionSlider';
import './HomePage.scss';

function HomePage() {
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

export default HomePage;
