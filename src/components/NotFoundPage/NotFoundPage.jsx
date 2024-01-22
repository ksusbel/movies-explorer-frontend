import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
    return (
        <>
            <header className="not-found-page__header"></header>
            <main className="not-found-page">
                <h1 className="not-found-page__code-name">404</h1>
                <p className="not-found-page__text-name">Страница не найдена</p>
                <Link to="/" className="not-found-page__link">
                    Назад
                </Link>
            </main>
        </>
    );
}

export default NotFoundPage;
