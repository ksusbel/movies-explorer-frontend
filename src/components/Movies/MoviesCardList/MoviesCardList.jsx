import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
    return (
        <section className="movies-cards-list">
            <ul className="movies-cards-list__list">
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
            </ul>
            <button className="movies-cards-list__more-button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
