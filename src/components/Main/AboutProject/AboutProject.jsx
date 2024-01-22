import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';

function AboutProject() {
  return (
    <section className="about-project">
      <MainTitle title="О проекте"></MainTitle>
      <ul className="about-project__lists">
        <li className="about-project__list">
          <h3 className="about-project__list-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__list-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__list">
          <h3 className="about-project__list-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__list-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__limits">
        <li className="about-project__limit about-project__limit_backend">
          <p className="about-project__limit_backend-time">1 неделя</p>
          <p className="about-project__limit_name">Back-end</p>
        </li>
        <li className="about-project__limit about-project__limit_frontend">
          <p className="about-project__limit_frontend-time">4 недели</p>
          <p className="about-project__limit_name">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;