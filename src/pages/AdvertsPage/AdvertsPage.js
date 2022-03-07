import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import AdvertsList from './AdvertsList';
import './AdvertsPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { loadAdverts } from '../../store/actions';
import { getAdverts } from '../../store/selectors/selectors';
import { useEffect } from 'react';

function AdvertsPage(history, ...props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);
  console.log(adverts);

  return (
    <LayoutGeneral id="adverts-page" {...props}>
      <AdvertsList adverts={adverts} />
    </LayoutGeneral>
  );
}

export default AdvertsPage;
