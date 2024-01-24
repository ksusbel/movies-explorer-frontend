import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__block">
                <input className="filter-checkbox__checkbox" type="checkbox" name="filter_checkbox" id="filter_checkbox" />
                <span class="filter-checkbox__toggler-slider">
                    <span class="filter-checkbox__toggler-knob"></span>
                </span>
            </label>
            <label className="filter-checkbox__name" for="filter_checkbox">
                Короткометражки
            </label>
        </div>
    );
}

export default FilterCheckbox;
