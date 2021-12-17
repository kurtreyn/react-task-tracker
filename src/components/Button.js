// import PropTypes from './prp-types';

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultPorps = {
  color: 'steelblue',
};

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };

export default Button;
