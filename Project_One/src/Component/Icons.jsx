// import React from 'react'
import Logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";

const Icons = () => {
  return (
    <div className="flex flex-col mx-4 sm:mx-0 sm:flex-row gap-4 items-center justify-between">
      <img src={Logo} alt="logo" className="w-[200px]" />
      <div className="flex justify-between space-x-4">
        <img src={Facebook} alt="icons" />
        <img src={Twitter} alt="icons" />
        <img src={Instagram} alt="icons" />
        <img src={Pinterest} alt="icons" />
      </div>
    </div>
  );
};

export default Icons;
