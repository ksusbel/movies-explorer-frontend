import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__point">
          <a href="https://ksusbel.github.io/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__link-name">Статичный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__point">
          <a href="https://ksusbel.github.io/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__point">
          <a href="https://ksusbel.github.io/react-mesto-auth" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;