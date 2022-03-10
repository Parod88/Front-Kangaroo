import AdvertCard from '../../../components/Advert/AdvertCard';
import './SectionSlider.scss';

function SectionSlider({ adverts, title, subtitle, limit }) {
  return (
    <section id="section-slider">
      <div className="container">
        <div className="header">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
        <ul className="content">
          {adverts.length > 0 ? (
            adverts.slice(0, limit).map(({ _id, ...advert }) => (
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
    </section>
  );
}

export default SectionSlider;
