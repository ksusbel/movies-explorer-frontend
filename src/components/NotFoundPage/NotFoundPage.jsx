import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <>
            <header className="not-found-page-header"></header>
            <main className="not-found-page">
                <h1 className="not-found-page__code-name">404</h1>
                <p className="not-found-page__text-name">Страница не найдена</p>
                <Link className="not-found-page__link" onClick={() => navigate(-1)}>
                    Назад
                </Link>
            </main>
        </>
    );
}

export default NotFoundPage;
