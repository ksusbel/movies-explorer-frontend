import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <input className="search-form__input" placeholder="Фильм" />
                <button type="submit" className="search-form__button"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </section>
    );
}

export default SearchForm;
