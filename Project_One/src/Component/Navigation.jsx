import { useState } from "react";
import { FaBars, FaCross } from "react-icons/fa";

import Button from "./Button";
import Logo from "../assets/images/logo.svg";

const Navigation = () => {
  const [navigation, setNavigation] = useState(false);
  const style = "text-gray-500 hover:text-black duration-200 cursor-pointer";

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <div>
      <div className="flex justify-between max-w-[1440px] m-5 md:mx-auto md:my-5 font-Karla items-center">
        <img src={Logo} alt="logo" />
        <div className="hidden lg:block">
          <ul className="flex uppercase space-x-10 text-[16px] font-semibold items-center">
            <li className={style} end>
              How we work
            </li>
            <li className={style}>Blog</li>
            <li className={style}>Account</li>
            <Button styling="border-black">view plans</Button>
          </ul>
        </div>
        <div
          className="md:hidden p-2 border-2 border-black"
          onClick={handleNavigation}
        >
          {navigation ? <FaCross size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      <div
        className={
          navigation
            ? "flex flex-col fixed right-0 w-[100%] border-r h-full bg-black text-white ease-in-out duration-500 sm:hidden"
            : "fixed right-[-100%]"
        }
      >
        <ul className="flex flex-col mt-5 text-center uppercase ml-10 gap-7 font-normal text-2xl">
          <li>How we work</li>
          <li>Blog</li>
          <li>Acounts</li>
          <Button>view plans</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
