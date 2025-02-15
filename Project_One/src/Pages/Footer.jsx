// import React from 'react'

import FootGrid from "../Component/FootGrid";
import Icons from "../Component/Icons";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-[100px] mt-[200px]">
      <div className="max-w-[1440px] mx-4 sm:mx-auto">
        <Icons />
        <hr className="w-full mt-[50px] border-black z-100 mb-20" />
        <FootGrid/>
      </div>
    </div>
  );
};

export default Footer;
