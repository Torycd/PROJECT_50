// import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Button from "./Button";

const Navigation = () => {
  //   const [showNav, setShowNav] = useState();
  //   const [navigation, setNavigation] = useState();
  const style = "text-gray-500 hover:text-black duration-200";

  return (
    <div className="flex justify-between max-w-[1440px] m-5 md:mx-auto md:my-5 items-center">
      <h2 className="text-[26px] font-medium tracking-widest font-Serif">INSURE</h2>
      <div className="hidden lg:block">
        <ul className="flex uppercase space-x-10 text-[16px] font-semibold items-center">
          <li className={style}>How we work</li>
          <li className={style}>Blog</li>
          <li className={style}>Account</li>
          <Button>view plans</Button>
        </ul>
      </div>
      <div className="md:hidden p-2 border-2 border-black">
        <FaBars size={20} />
      </div>
    </div>
  );
};

export default Navigation;
