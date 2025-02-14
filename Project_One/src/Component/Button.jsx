import PropTypes from "prop-types";

const Button = ({ children, styling }) => {
  return (
    <button
      className={`px-6 py-3 z-100 border-[4px] uppercase font-Karla transition-colors duration-200 ${styling}`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  styling: PropTypes.string,
};
