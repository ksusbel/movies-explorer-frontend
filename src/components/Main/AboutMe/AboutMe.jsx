import MainTitle from '../MainTitle/MainTitle';
import image from "../../../images/my_photo.jpg";
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <MainTitle title="Студент"></MainTitle>
      <div className="about-me__block">
        <div className="about-me__biography">
          <h3 className="about-me__name">Оксана</h3>
          <p className="about-me__prof">Инженер-программист, 43 года</p>
          <p className="about-me__description">Живу в городе Дубна. У меня 2 высших образования, 
            первое - экономическое, а второе - программное обеспечение ВТ и автоматизированных систем. 
            <br />С 2005 года работаю в научной международной организации разарботчиком ПО. 
            <br />Увлекаюсь 3D-моделированием. Есть дочь.</p>             
          <a href="https://github.com/ksusbel" className="about-me__link">GitHub</a>           
        </div>
        <img src={image} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
}


export default AboutMe;