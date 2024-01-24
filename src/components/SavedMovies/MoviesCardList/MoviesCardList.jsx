import MoviesCard from "../MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";

function MoviesCardList() {
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
            <button type="button" className="movies-cards-list__more-button">
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;
