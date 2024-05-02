import PropTypes from 'prop-types';
import {useState} from "react";

function CustomSelect({ options, onChange,value }) {

    return (
        <select className="form-select " style={{width:"200px", height:"50px"}} value={value} onChange={onChange}>
            {value.map((option, index) => (
                <option key={index} value={option.locale}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

CustomSelect.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
