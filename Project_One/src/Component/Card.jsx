import PropTypes from "prop-types";

const Card = ({ statement, icon, title }) => {
  return (
    <div>
      <img src={icon} alt={title} className="w-[86px] h-[86px] mb-6 left-0" />
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
