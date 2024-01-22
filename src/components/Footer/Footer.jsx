import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const location = useLocation();
    const pagesFooter = ["/", "/movies", "/saved-movies"];

    if (!pagesFooter.includes(location.pathname)) {
        return null;
    }
    return (
        <footer className="footer">
            <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
            <div className="footer__block">
                <p className="footer__copyright">&copy; 2024</p>
                <nav className="footer__links">
                    <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">
                        Яндекс.Практикум
                    </a>
                    <a href="https://github.com/ksusbel" className="footer__link" target="_blank" rel="noreferrer">
                        Github
                    </a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
