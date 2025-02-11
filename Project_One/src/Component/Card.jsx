// import React from 'react'
import PropTypes from "prop-types";

const Card = ({ statement, icon, title }) => {
  return (
    <div>
      <img src={icon} alt={title} className="w-[86px] h-[86px] mb-6 left-0" />
      <h2 className="text-[24px]">{title}</h2>
      <p className="text-[16px]">{statement}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  statement: PropTypes.string,
  title: PropTypes.string,
    icon: PropTypes.element,
};
