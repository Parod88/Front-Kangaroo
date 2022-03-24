import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import { loadCategories, loadPaginatedAdverts } from '../../store/actions';
import { getAdverts, getCategories } from '../../store/selectors/selectors';
import SectionSlider from './SectionSlider/SectionSlider';
import Header from './Header/Header';
import './HomePage.scss';
import SliderCategories from './SliderCategories/SliderCategories';

function HomePage() {
  const dispatch = useDispatch();

  const adverts = useSelector(getAdverts);
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <LayoutGeneral>
      <Header />
      <SliderCategories categories={categories} limit={6} />
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
