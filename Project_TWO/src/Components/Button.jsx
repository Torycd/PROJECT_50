import PropTypes from "prop-types";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-orange-500 text-white rounded-full py-3 font-semibold hover:bg-orange-600"
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
