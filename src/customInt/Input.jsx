import PropTypes from 'prop-types';
function Input({ inputType, placeholder, onChange, value, additionalClassName  }){
    const classNames = `p-2 border border-primary rounded-pill form-control focus-ring  ${additionalClassName}`;
    return (
        <div className="container mt-5 position-relative">
        <input
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={classNames}
            style={{ width: '300px' }}
        />
            <p className={additionalClassName} style={{marginTop:"1.2rem"}}>Value: {value}</p>
        </div>
    );

}
Input.propTypes= {
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func,
    additionalClassName: PropTypes.string
}
export default Input