import Advert from './Advert';
import { Link } from 'react-router-dom';

function AdvertsList({ adverts }) {
  return (
    <div className="advertsPage">
      <ul className="flex-ul">
        {adverts.length > 0 ? (
          adverts.map(({ _id, ...advert }) => (
            <li className="Advert-div" key={_id}>
              <Advert {...advert} />
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
