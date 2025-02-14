import PropTypes from "prop-types";

const Card = ({ statement, icon, title }) => {
  return (
    <div className="text-center md:text-left">
      <img src={icon} alt={title} className="w-[86px] mx-auto sm:mx-0 h-[86px] mb-6 left-0" />
      <h2 className="text-[24px] mb-6">{title}</h2>
      <p className="text-[16px] opacity-50">{statement}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  statement: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};
