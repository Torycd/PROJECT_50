import PropTypes from "prop-types";

const Button = ({ children, styling }) => {
  return (
    <button
      className={`px-6 py-3 border-[4px] uppercase font-Karla hover:bg-[black] hover:text-white ${styling}`}
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
