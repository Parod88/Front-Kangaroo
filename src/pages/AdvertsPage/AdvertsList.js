import AdvertCard from '../../components/Advert/AdvertCard';
import { Link } from 'react-router-dom';
import './advertsList.scss';

function AdvertsList({ adverts }) {
  return (
    <div id="adverts-list">
      <div>
        <h3></h3>
        <h5></h5>
      </div>
      <ul className="adverts-list-grid">
        {adverts.length > 0 ? (
          adverts.map(({ _id, ...advert }) => (
            <li key={_id}>
              <AdvertCard {...advert} />
            </li>
          ))
        ) : (
          <div>
            <h2>Aún no hay Anuncios, ¡sé el primero!</h2>
          </div>
        )}
      </ul>
    </div>
  );
}

export default AdvertsList;
