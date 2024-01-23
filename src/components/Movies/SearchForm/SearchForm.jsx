import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <div className="search-form__form_block">
                <input className="search-form__input" placeholder="Фильм" />
                <button type="submit" className="search-form__button"></button>
                </div>
                <FilterCheckbox></FilterCheckbox>
            </form>           
        </section>
    );
}

export default SearchForm;
