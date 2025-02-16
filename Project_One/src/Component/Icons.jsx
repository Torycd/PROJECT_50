// import React from 'react'
import {  FaTwitter, FaInstagram, FaPinterest, FaFacebook  } from "react-icons/fa"

import Logo from "../assets/images/logo.svg";

const Icons = () => {
  return (
    <div className="flex flex-col mx-4 sm:mx-0 sm:flex-row gap-4 items-center justify-between">
      <img src={Logo} alt="logo" className="w-[200px]" />
      <div className="flex justify-between space-x-4">
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaInstagram size={20} />
        <FaPinterest size={20} />
      </div>
    </div>
  );
};
export default Icons;
