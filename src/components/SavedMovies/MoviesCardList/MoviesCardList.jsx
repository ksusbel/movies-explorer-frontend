import MoviesCard from "../MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";

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
            <button className="movies-cards-list__button-more">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
