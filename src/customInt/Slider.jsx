import PropTypes from "prop-types";

function Slider({value, onChange}) {
    const handleChange = (event) => {
        const newValue = +event.target.value;
        onChange(newValue > 10 ? 10 : newValue);
    };
    return (
        <div className="container mt-5 position-relative">
            <input
                type="range"
                className="form-range-sm"
                min="0"
                max="10"
                step={0.25}
                onChange={handleChange}
                value={value}
            />
            <p>Value: {(value>10)?(10):(value)}</p>
        </div>
    );
}
Slider.propTypes= {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
}
export default Slider;