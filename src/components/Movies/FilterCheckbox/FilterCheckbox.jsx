import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__block">
                <input className="filter-checkbox__checkbox" type="checkbox" name="filter_checkbox" id="filter_checkbox" />
                <span className="filter-checkbox__toggler-slider">
                    <span className="filter-checkbox__toggler-knob"></span>
                </span>
            </label>
            <label className="filter-checkbox__name" htmlFor="filter_checkbox">
                Короткометражки
            </label>
        </div>
    );
}

export default FilterCheckbox;
