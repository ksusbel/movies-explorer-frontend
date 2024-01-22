import './Techs.css';
import MainTitle from '../MainTitle/MainTitle';

function Techs() {
  return (
    <section className="techs">
      <MainTitle title="Технологии"></MainTitle>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__type">HTML</li>
        <li className="techs__type">CSS</li>
        <li className="techs__type">JS</li>
        <li className="techs__type">React</li>
        <li className="techs__type">Git</li>
        <li className="techs__type">Express.js</li>
        <li className="techs__type">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;